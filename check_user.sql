-- 查询指定邮箱的用户信息
SELECT 
    id,
    email,
    email_confirmed_at,
    confirmation_sent_at,
    created_at,
    updated_at,
    last_sign_in_at
FROM auth.users 
WHERE email = '363383119@qq.com';