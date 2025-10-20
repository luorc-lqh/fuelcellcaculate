// 检查用户是否存在的脚本
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://piffnomsahgabaxxdumq.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZmZub21zYWhnYWJheHhkdW1xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDgyODI2MywiZXhwIjoyMDc2NDA0MjYzfQ.x960qoFXWTw6R7R79iRsQ2qrPnwOk30DmsCQmlwbANs';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkUser() {
    try {
        const { data, error } = await supabase.auth.admin.listUsers();
        
        if (error) {
            console.error('查询用户时出错:', error);
            return;
        }
        
        const targetEmail = '363383119@qq.com';
        const user = data.users.find(u => u.email === targetEmail);
        
        if (user) {
            console.log('找到用户:', {
                id: user.id,
                email: user.email,
                email_confirmed_at: user.email_confirmed_at,
                confirmation_sent_at: user.confirmation_sent_at,
                created_at: user.created_at,
                updated_at: user.updated_at,
                last_sign_in_at: user.last_sign_in_at
            });
        } else {
            console.log('未找到邮箱为', targetEmail, '的用户');
        }
    } catch (err) {
        console.error('执行查询时出错:', err);
    }
}

checkUser();