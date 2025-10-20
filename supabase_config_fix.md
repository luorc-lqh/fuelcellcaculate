# Supabase邮箱验证配置修复指南

## 问题诊断
通过检查发现以下配置问题：
- 站点URL未设置 (site_url: undefined)
- 重定向URLs未配置 (uri_allow_list: undefined)  
- 邮件确认功能被禁用 (mailer_autoconfirm: false)

## 解决方案

### 1. 登录Supabase Dashboard
访问：https://supabase.com/dashboard/project/piffnomsahgabaxxdumq

### 2. 配置认证设置
进入 **Authentication** > **Settings**

#### 2.1 Site URL设置
在 **Site URL** 字段中设置：
```
http://localhost:8000
```

#### 2.2 Redirect URLs设置
在 **Redirect URLs** 字段中添加：
```
http://localhost:8000/verify-email.html
http://localhost:8000/
http://localhost:8000/index.html
```

### 3. 配置邮件模板
进入 **Authentication** > **Email Templates**

#### 3.1 确认邮件模板
确保 **Confirm signup** 模板中的链接指向：
```
{{ .SiteURL }}/verify-email.html?token={{ .Token }}&type=signup
```

### 4. 测试步骤
1. 保存配置后等待几分钟生效
2. 清除浏览器缓存
3. 重新注册一个新邮箱
4. 检查邮件中的验证链接是否正确

### 5. 验证配置
运行以下命令检查配置是否生效：
```bash
node check_supabase_config.js
```

## 注意事项
- 配置更改可能需要几分钟才能生效
- 确保本地服务器在8000端口运行
- 如果仍有问题，可能需要重新发送验证邮件

## 最新检查结果 (2024-12-25)
✅ 已修复verify-email.html的JavaScript逻辑
✅ 已检查Supabase项目配置
❌ 发现配置问题：站点URL和重定向URL未正确设置

**立即需要修复的配置：**
1. 在Supabase Dashboard中设置Site URL为 `http://localhost:8000`
2. 添加重定向URL：`http://localhost:8000/verify-email.html`
3. 确保邮件模板正确配置