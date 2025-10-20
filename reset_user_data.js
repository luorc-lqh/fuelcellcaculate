// 重置用户数据脚本 - 删除指定邮箱的用户记录
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://piffnomsahgabaxxdumq.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZmZub21zYWhnYWJheHhkdW1xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDgyODI2MywiZXhwIjoyMDc2NDA0MjYzfQ.x960qoFXWTw6R7R79iRsQ2qrPnwOk30DmsCQmlwbANs';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function resetUserData() {
    const targetEmail = '363383119@qq.com';
    
    try {
        console.log('🔍 正在查找用户...');
        
        // 1. 首先查找用户
        const { data: users, error: listError } = await supabase.auth.admin.listUsers();
        
        if (listError) {
            console.error('❌ 查询用户列表失败:', listError);
            return;
        }
        
        const user = users.users.find(u => u.email === targetEmail);
        
        if (!user) {
            console.log('✅ 用户不存在，无需删除');
            return;
        }
        
        console.log('📋 找到用户:', {
            id: user.id,
            email: user.email,
            created_at: user.created_at,
            email_confirmed_at: user.email_confirmed_at
        });
        
        // 2. 删除用户（这会同时删除相关的认证数据、会话等）
        console.log('🗑️ 正在删除用户...');
        const { error: deleteError } = await supabase.auth.admin.deleteUser(user.id);
        
        if (deleteError) {
            console.error('❌ 删除用户失败:', deleteError);
            return;
        }
        
        console.log('✅ 用户删除成功！');
        
        // 3. 验证删除结果
        console.log('🔍 验证删除结果...');
        const { data: verifyUsers, error: verifyError } = await supabase.auth.admin.listUsers();
        
        if (verifyError) {
            console.error('❌ 验证失败:', verifyError);
            return;
        }
        
        const deletedUser = verifyUsers.users.find(u => u.email === targetEmail);
        
        if (deletedUser) {
            console.log('⚠️ 警告：用户仍然存在');
        } else {
            console.log('✅ 验证成功：用户已完全删除');
        }
        
        // 4. 检查相关表中的数据
        console.log('🔍 检查相关数据表...');
        
        // 检查 profiles 表
        const { data: profiles, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id);
            
        if (profileError && !profileError.message.includes('relation "public.profiles" does not exist')) {
            console.error('❌ 检查profiles表失败:', profileError);
        } else if (profiles && profiles.length > 0) {
            console.log('⚠️ profiles表中仍有数据，正在删除...');
            const { error: deleteProfileError } = await supabase
                .from('profiles')
                .delete()
                .eq('id', user.id);
            if (deleteProfileError) {
                console.error('❌ 删除profile失败:', deleteProfileError);
            } else {
                console.log('✅ profile数据已删除');
            }
        } else {
            console.log('✅ profiles表中无相关数据');
        }
        
        // 检查 calculations 表
        const { data: calculations, error: calcError } = await supabase
            .from('calculations')
            .select('*')
            .eq('user_id', user.id);
            
        if (calcError && !calcError.message.includes('relation "public.calculations" does not exist')) {
            console.error('❌ 检查calculations表失败:', calcError);
        } else if (calculations && calculations.length > 0) {
            console.log('⚠️ calculations表中仍有数据，正在删除...');
            const { error: deleteCalcError } = await supabase
                .from('calculations')
                .delete()
                .eq('user_id', user.id);
            if (deleteCalcError) {
                console.error('❌ 删除calculations失败:', deleteCalcError);
            } else {
                console.log('✅ calculations数据已删除');
            }
        } else {
            console.log('✅ calculations表中无相关数据');
        }
        
        console.log('\n🎉 用户数据重置完成！');
        console.log('📝 现在可以使用邮箱 ' + targetEmail + ' 重新注册了');
        
    } catch (error) {
        console.error('❌ 重置过程中发生错误:', error);
    }
}

// 执行重置
resetUserData();