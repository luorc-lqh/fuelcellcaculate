// 初始化Supabase客户端
let supabaseClient = null;

// 当前用户信息
let currentUser = null;

// 标记是否刚刚完成邮箱验证（用于控制验证成功消息的显示）
let justVerifiedEmail = false;

// 初始化Supabase
function initializeSupabase() {
    try {
        if (typeof supabase === 'undefined') {
            console.error('Supabase not loaded');
            return false;
        }
        
        if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) {
            console.error('Supabase config not found');
            return false;
        }
        
        supabaseClient = supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
        console.log('Supabase initialized successfully');
        
        // 监听认证状态变化
        supabaseClient.auth.onAuthStateChange((event, session) => {
            console.log('Auth state changed:', event, session);
            
            // 处理邮箱验证事件
            if (event === 'SIGNED_IN' && session) {
                currentUser = session.user;
                updateUIForLoggedInUser(session.user);
                
                // 只在刚刚完成邮箱验证时显示成功消息
                // 检查是否是从验证页面跳转过来的，或者是否标记为刚验证
                const fromVerifyPage = document.referrer.includes('verify-email.html') || 
                                     window.location.search.includes('verified=true') ||
                                     justVerifiedEmail;
                
                if (session.user.email_confirmed_at && fromVerifyPage) {
                    showMessage('邮箱验证成功！欢迎使用燃料电池计算器。', 'success');
                    // 重置标记，避免重复显示
                    justVerifiedEmail = false;
                }
            } else if (event === 'SIGNED_OUT') {
                currentUser = null;
                updateUIForLoggedOutUser();
            } else if (session) {
                currentUser = session.user;
                updateUIForLoggedInUser(session.user);
            } else {
                currentUser = null;
                updateUIForLoggedOutUser();
            }
        });
        
        // 检查现有会话
        checkExistingSession();
        return true;
    } catch (error) {
        console.error('Error initializing Supabase:', error);
        return false;
    }
}

// 检查现有会话
async function checkExistingSession() {
    try {
        const { data: { session }, error } = await supabaseClient.auth.getSession();
        if (error) {
            console.error('Error getting session:', error);
            return;
        }
        
        if (session) {
            currentUser = session.user;
            updateUIForLoggedInUser(session.user);
        }
    } catch (error) {
        console.error('Error checking session:', error);
    }
}

// 更新UI为已登录状态
function updateUIForLoggedInUser(user) {
    const loginButton = document.getElementById('loginButton');
    const userInfo = document.getElementById('userInfo');
    const userEmail = document.getElementById('userEmail');
    
    if (loginButton && userInfo && userEmail) {
        // 隐藏登录按钮，显示用户信息
        loginButton.style.display = 'none';
        userInfo.style.display = 'flex';
        userEmail.textContent = user.email;
    }
}

// 更新UI为未登录状态
function updateUIForLoggedOutUser() {
    const loginButton = document.getElementById('loginButton');
    const userInfo = document.getElementById('userInfo');
    
    if (loginButton && userInfo) {
        // 显示登录按钮，隐藏用户信息
        loginButton.style.display = 'block';
        loginButton.textContent = '登录';
        loginButton.onclick = showLoginModal;
        userInfo.style.display = 'none';
    }
}

// 显示退出登录菜单
function showLogoutMenu() {
    const confirmed = confirm('确定要退出登录吗？');
    if (confirmed) {
        handleLogout();
    }
}

// 处理退出登录
async function handleLogout() {
    try {
        showLoading('正在退出登录...');
        
        const { error } = await supabaseClient.auth.signOut();
        if (error) {
            throw error;
        }
        
        hideLoading();
        showMessage('已成功退出登录', 'success');
        
    } catch (error) {
        hideLoading();
        showError('退出登录失败：' + error.message);
    }
}

// 显示登录模态框
function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'flex';
        showLoginSection();
        clearForms();
    }
}

// 隐藏登录模态框
function hideLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
        clearForms();
        hideError();
        hideLoading();
    }
}

// 显示登录部分
function showLoginSection() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('registerSection').style.display = 'none';
}

// 显示注册部分
function showRegisterSection() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'block';
}

// 清空表单
function clearForms() {
    const forms = ['loginForm', 'registerForm'];
    forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.reset();
        }
    });
}

// 显示错误信息
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
}

// 隐藏错误信息
function hideError() {
    const errorDiv = document.getElementById('errorMessage');
    if (errorDiv) {
        errorDiv.style.display = 'none';
    }
}

// 显示加载状态
function showLoading(message = '处理中...') {
    const loadingDiv = document.getElementById('loadingSpinner');
    const loadingText = document.getElementById('loadingText');
    if (loadingDiv && loadingText) {
        loadingText.textContent = message;
        loadingDiv.style.display = 'flex';
    }
    
    // 禁用提交按钮
    const submitButtons = document.querySelectorAll('button[type="submit"]');
    submitButtons.forEach(btn => btn.disabled = true);
}

// 隐藏加载状态
function hideLoading() {
    const loadingDiv = document.getElementById('loadingSpinner');
    if (loadingDiv) {
        loadingDiv.style.display = 'none';
    }
    
    // 启用提交按钮
    const submitButtons = document.querySelectorAll('button[type="submit"]');
    submitButtons.forEach(btn => btn.disabled = false);
}

// 显示成功/信息消息
function showMessage(message, type = 'info') {
    // 创建临时消息元素
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-toast ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        background-color: ${type === 'success' ? '#27ae60' : '#3498db'};
    `;
    
    document.body.appendChild(messageDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 3000);
}

// 处理登录
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        showError('请输入邮箱和密码');
        return;
    }
    
    try {
        showLoading('正在登录...');
        hideError();
        
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });
        
        if (error) {
            throw error;
        }
        
        hideLoading();
        hideLoginModal();
        showMessage('登录成功！', 'success');
        
    } catch (error) {
        hideLoading();
        let errorMessage = '登录失败';
        
        if (error.message.includes('Invalid login credentials')) {
            errorMessage = '邮箱或密码错误';
        } else if (error.message.includes('Email not confirmed')) {
            // 邮箱未验证，不允许登录
            errorMessage = '请先验证您的邮箱后再登录。如果您没有收到验证邮件，请点击下方按钮重新发送。';
            showError(errorMessage);
            showResendVerificationButton(document.getElementById('loginEmail').value.trim());
            return;
        } else {
            errorMessage = '登录失败：' + error.message;
        }
        
        showError(errorMessage);
    }
}

// 处理注册
async function handleRegister(event) {
    event.preventDefault();
    
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    
    if (!email || !password) {
        showError('请输入邮箱和密码');
        return;
    }
    
    if (password.length < 6) {
        showError('密码长度至少6位');
        return;
    }
    
    try {
        showLoading('正在注册...');
        hideError();
        
        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: `${window.location.origin}/verify-email.html`
            }
        });
        
        if (error) {
            throw error;
        }
        
        hideLoading();
        
        if (data.user && !data.session) {
            // 需要邮箱验证
            showMessage('注册成功！请检查您的邮箱并点击验证链接。', 'success');
            showLoginSection();
        } else {
            // 直接登录成功
            hideLoginModal();
            showMessage('注册并登录成功！', 'success');
        }
        
    } catch (error) {
        hideLoading();
        let errorMessage = '注册失败';
        
        if (error.message.includes('User already registered')) {
            // 用户已存在，提供重新发送验证邮件的选项
            errorMessage = '该邮箱已被注册。如果您没有收到验证邮件，请点击下方按钮重新发送。';
            showError(errorMessage);
            showResendVerificationButton(email);
        } else if (error.message.includes('Password should be at least 6 characters')) {
            errorMessage = '密码长度至少6位';
            showError(errorMessage);
        } else {
            errorMessage = '注册失败：' + error.message;
            showError(errorMessage);
        }
    }
}

// 显示重新发送验证邮件按钮
function showResendVerificationButton(email) {
    // 移除已存在的按钮
    const existingButton = document.getElementById('resendVerificationBtn');
    if (existingButton) {
        existingButton.remove();
    }
    
    const errorDiv = document.getElementById('loginError');
    if (errorDiv) {
        const resendButton = document.createElement('button');
        resendButton.id = 'resendVerificationBtn';
        resendButton.textContent = '重新发送验证邮件';
        resendButton.className = 'resend-verification-btn';
        resendButton.onclick = () => resendVerificationEmail(email);
        
        errorDiv.appendChild(resendButton);
    }
}

// 重新发送验证邮件
async function resendVerificationEmail(email) {
    try {
        showLoading('正在发送验证邮件...');
        
        const { error } = await supabaseClient.auth.resend({
            type: 'signup',
            email: email,
            options: {
                emailRedirectTo: `${window.location.origin}/verify-email.html`
            }
        });
        
        if (error) {
            throw error;
        }
        
        hideLoading();
        showMessage('验证邮件已重新发送，请检查您的邮箱（包括垃圾邮件文件夹）。', 'success');
        
        // 移除重新发送按钮
        const resendButton = document.getElementById('resendVerificationBtn');
        if (resendButton) {
            resendButton.remove();
        }
        
    } catch (error) {
        hideLoading();
        showError('发送验证邮件失败：' + error.message);
    }
}

// 获取当前用户信息
function getCurrentUser() {
    return currentUser;
}

// 检查用户是否已登录
function isUserLoggedIn() {
    return currentUser !== null;
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查URL参数，如果包含verified=true，设置标记
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('verified') === 'true') {
        justVerifiedEmail = true;
        // 清除URL参数，避免刷新页面时重复显示
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
    
    // 初始化Supabase
    initializeSupabase();
    
    // 绑定事件监听器
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', showLoginModal);
    }
    
    // 关闭模态框
    const closeButton = document.querySelector('#loginModal .close-button');
    if (closeButton) {
        closeButton.addEventListener('click', hideLoginModal);
    }
    
    // 点击模态框外部关闭
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                hideLoginModal();
            }
        });
    }
    
    // 绑定表单提交事件
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // 绑定切换表单的链接
    const showRegisterLink = document.getElementById('showRegister');
    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', function(e) {
            e.preventDefault();
            showRegisterSection();
        });
    }
    
    const showLoginLink = document.getElementById('showLogin');
    if (showLoginLink) {
        showLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            showLoginSection();
        });
    }
    
    // 绑定用户菜单事件
    const userMenuButton = document.getElementById('userMenuButton');
    const userMenu = document.getElementById('userMenu');
    if (userMenuButton && userMenu) {
        userMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            userMenu.style.display = userMenu.style.display === 'none' ? 'block' : 'none';
        });
        
        // 点击页面其他地方关闭菜单
        document.addEventListener('click', function() {
            userMenu.style.display = 'none';
        });
    }
    
    // 绑定退出登录按钮
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
    
    // 绑定查看资料按钮
    const viewProfile = document.getElementById('viewProfile');
    if (viewProfile) {
        viewProfile.addEventListener('click', function() {
            showMessage('用户资料功能开发中...', 'info');
            document.getElementById('userMenu').style.display = 'none';
        });
    }
});

// 添加CSS动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .resend-verification-btn {
        margin-top: 10px;
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s;
    }
    
    .resend-verification-btn:hover {
        background-color: #0056b3;
    }
    
    .resend-verification-btn:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);