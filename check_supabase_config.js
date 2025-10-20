// 检查Supabase项目配置脚本
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://piffnomsahgabaxxdumq.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZmZub21zYWhnYWJheHhkdW1xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDgyODI2MywiZXhwIjoyMDc2NDA0MjYzfQ.x960qoFXWTw6R7R79iRsQ2qrPnwOk30DmsCQmlwbANs';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkSupabaseConfig() {
    try {
        console.log('🔍 检查Supabase项目配置...');
        
        // 1. 检查项目基本信息
        console.log('📋 项目信息:');
        console.log('- URL:', supabaseUrl);
        console.log('- 项目ID: piffnomsahgabaxxdumq');
        
        // 2. 检查认证设置
        console.log('\n🔐 检查认证设置...');
        
        // 获取认证配置（需要通过管理API）
        const response = await fetch(`${supabaseUrl}/auth/v1/settings`, {
            headers: {
                'Authorization': `Bearer ${supabaseServiceKey}`,
                'apikey': supabaseServiceKey
            }
        });
        
        if (response.ok) {
            const authSettings = await response.json();
            console.log('✅ 认证设置获取成功:');
            console.log('- 站点URL:', authSettings.site_url);
            console.log('- 重定向URLs:', authSettings.uri_allow_list);
            console.log('- 邮件确认启用:', authSettings.mailer_autoconfirm);
            console.log('- 邮件模板:', authSettings.mailer_templates);
        } else {
            console.log('⚠️ 无法获取认证设置，状态码:', response.status);
        }
        
        // 3. 测试邮箱验证URL
        console.log('\n🔗 建议的重定向URL配置:');
        console.log('- 本地开发: http://localhost:8000/verify-email.html');
        console.log('- 生产环境: https://your-domain.com/verify-email.html');
        
        // 4. 检查当前用户
        console.log('\n👥 检查用户列表...');
        const { data: users, error: usersError } = await supabase.auth.admin.listUsers();
        
        if (usersError) {
            console.error('❌ 获取用户列表失败:', usersError);
        } else {
            console.log(`✅ 找到 ${users.users.length} 个用户`);
            users.users.forEach((user, index) => {
                console.log(`${index + 1}. ${user.email} - 确认状态: ${user.email_confirmed_at ? '已确认' : '未确认'}`);
            });
        }
        
        console.log('\n📝 配置建议:');
        console.log('1. 在Supabase Dashboard中设置正确的重定向URL');
        console.log('2. 确保邮件模板中的链接指向正确的验证页面');
        console.log('3. 检查邮件服务提供商的配置');
        console.log('4. 验证本地服务器可以正常访问验证页面');
        
    } catch (error) {
        console.error('❌ 检查配置时发生错误:', error);
    }
}

// 执行检查
checkSupabaseConfig();