// 登录功能实现
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const loginModal = document.getElementById('loginModal');
    const closeButton = document.querySelector('#loginModal .close-button'); // 更精确的选择器
    const loginForm = document.getElementById('loginForm');

    // 显示登录模态框
    loginButton.addEventListener('click', function() {
        loginModal.style.display = 'flex';
    });

    // 关闭登录模态框
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });
    }

    // 点击模态框外部关闭
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // 登录表单提交
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // 简单验证
        if (username && password) {
            alert('登录成功！');
            loginModal.style.display = 'none';
            loginButton.textContent = '已登录';
            loginButton.style.backgroundColor = '#27ae60';
        } else {
            alert('请输入用户名和密码！');
        }
    });

    // 注册功能实现
    const registerButton = document.getElementById('registerButton');
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            // 获取表单元素
            const usernameInput = document.getElementById('username'); 
            const passwordInput = document.getElementById('password');
            const username = usernameInput.value;
            const password = passwordInput.value;
            
            // 简单验证
            if (username && password) {
                // 模拟注册成功
                alert('注册成功！您可以立即登录。');
                // 清空表单
                usernameInput.value = '';
                passwordInput.value = '';
            } else {
                alert('请输入用户名和密码来完成注册！');
            }
        });
    }
});