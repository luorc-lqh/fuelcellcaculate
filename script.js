// 等待DOM加载完成
window.addEventListener('DOMContentLoaded', function() {
    // 标签页切换功能
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有活跃状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // 添加当前按钮和内容的活跃状态
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 已移除顶部说明按钮
    
    // 下载按钮功能 - 需要先登录才能下载
    const downloadButton = document.getElementById('downloadButton');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            // 检查是否已登录（使用正确的登录状态检查方式）
            // 方法1：检查userInfo元素是否显示
            const userInfo = document.getElementById('userInfo');
            const isLoggedIn = userInfo && userInfo.style.display !== 'none';
            
            // 方法2：如果login.js中的isUserLoggedIn函数可用，也可以使用
            // const isLoggedIn = typeof isUserLoggedIn === 'function' ? isUserLoggedIn() : false;
            
            if (isLoggedIn) {
                // 已登录，执行下载
                const downloadLink = document.createElement('a');
                downloadLink.href = 'FuelCellCalculator.exe';
                downloadLink.download = 'FuelCellCalculator.exe';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            } else {
                // 未登录，提示登录
                alert('请先登录才能下载离线版！');
                // 自动打开登录模态框
                const loginButton = document.getElementById('loginButton');
                if (loginButton) {
                    loginButton.click();
                }
            }
        });
    }
    
    // 电堆基础设计参数说明对话框功能
    const stackDesignInfoButton = document.getElementById('stackDesignInfoButton');
    const stackDesignInfoDialog = document.getElementById('stackDesignInfoDialog');
    const closeStackDesignInfoButton = document.getElementById('closeStackDesignInfoButton');
    
    if (stackDesignInfoButton && stackDesignInfoDialog && closeStackDesignInfoButton) {
        stackDesignInfoButton.addEventListener('click', function() {
            stackDesignInfoDialog.style.display = 'flex';
        });
        
        closeStackDesignInfoButton.addEventListener('click', function() {
            stackDesignInfoDialog.style.display = 'none';
        });
        
        // 点击对话框外部关闭
        stackDesignInfoDialog.addEventListener('click', function(e) {
            if (e.target === stackDesignInfoDialog) {
                stackDesignInfoDialog.style.display = 'none';
            }
        });
    }
    
    // 绘制松树图形
    const treeCanvas = document.getElementById('treeCanvas');
    if (treeCanvas) {
        drawPineTree(treeCanvas);
    }
    
    // 数据导入导出功能
    const exportButton = document.getElementById('exportButton');
    const importButton = document.getElementById('importButton');
    const fileInput = document.getElementById('fileInput');
    
    exportButton.addEventListener('click', exportData);
    importButton.addEventListener('click', function() {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', importData);
    
    // 实用小工具功能
    const sumButton = document.getElementById('sumButton');
    const clearSumButton = document.getElementById('clearSumButton');
    const calculateVelocityButton = document.getElementById('calculateVelocityButton');
    
    sumButton.addEventListener('click', calculateSum);
    clearSumButton.addEventListener('click', clearSum);
    calculateVelocityButton.addEventListener('click', calculateFlowVelocity);
    
    // 介质选择下拉框事件
    const mediumType = document.getElementById('mediumType');
    const selectedDensity = document.getElementById('selectedDensity');
    
    if (mediumType) {
        mediumType.addEventListener('change', function() {
            const density = this.value;
            selectedDensity.textContent = `选择介质的密度为: ${density} kg/m³`;
        });
    }
    
    // 初始化计算 - 页面加载完成后立即计算一次
    function initializeCalculations() {
        calculatePowerEfficiency();
        calculateAirThermal();
        calculateValveFlow();
        calculatePipelinePressure();
        calculateHeatExchanger();
        calculateHybridSystem();
    }
    
    // 立即执行初始化计算
    initializeCalculations();
    
    // 监听所有输入变化，实时计算
    const allInputs = document.querySelectorAll('input[type="number"]');
    allInputs.forEach(input => {
        input.addEventListener('input', function() {
            // 第一页相关的输入变化时重新计算
            calculatePowerEfficiency();
            // 其他页面相关的输入变化时重新计算
            calculateAirThermal();
            calculateValveFlow();
            calculatePipelinePressure();
            calculateHeatExchanger();
            calculateHybridSystem();
        });
    });
    
    // 监听介质选择变化
    document.getElementById('mediumType').addEventListener('change', function() {
        // 更新显示的介质密度
        document.getElementById('selectedDensity').textContent = '选择介质的密度为: ' + this.value + ' kg/m³';
        // 重新计算阀门流体结果
        calculateValveFlow();
    });
    
    // 初始计算
    calculatePowerEfficiency();
    calculateAirThermal();
    calculateValveFlow();
    calculatePipelinePressure();
    calculateHeatExchanger();
    calculateHybridSystem();
});

// 绘制松树图形函数
function drawPineTree(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 设置颜色和样式
    ctx.fillStyle = '#34495e';
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 1;
    
    // 绘制树干
    ctx.fillRect(122, 50, 6, 20);
    
    // 绘制树冠
    ctx.beginPath();
    ctx.moveTo(125, 10);
    ctx.lineTo(105, 50);
    ctx.lineTo(145, 50);
    ctx.closePath();
    ctx.fillStyle = '#2ecc71';
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(125, 25);
    ctx.lineTo(95, 65);
    ctx.lineTo(155, 65);
    ctx.closePath();
    ctx.fillStyle = '#27ae60';
    ctx.fill();
    ctx.stroke();
}

// 第一页：系统设计计算
function calculatePowerEfficiency() {
    // 获取输入值
    const cellVoltage = parseFloat(document.getElementById('cellVoltage').value) || 0;
    const cellCount = parseInt(document.getElementById('cellCount').value) || 0;
    const reactionArea = parseFloat(document.getElementById('reactionArea').value) || 0;
    const currentDensity = parseFloat(document.getElementById('currentDensity').value) || 0;
    const airRatio = parseFloat(document.getElementById('airRatio').value) || 0;
    const hydrogenRatio = parseFloat(document.getElementById('hydrogenRatio').value) || 0;
    const operatingTemp = parseFloat(document.getElementById('operatingTemp').value) || 0;
    const ambientTemp = parseFloat(document.getElementById('ambientTemp').value) || 0;
    const tempDifference = parseFloat(document.getElementById('tempDifference').value) || 0;
    const humidity = parseFloat(document.getElementById('humidity').value) || 0;
    const hydrogenUtilization = parseFloat(document.getElementById('hydrogenUtilization').value) || 0;
    const anodeInletPressure = parseFloat(document.getElementById('anodeInletPressure').value) || 0;
    const cathodeInletPressure = parseFloat(document.getElementById('cathodeInletPressure').value) || 0;
    const anodePressureLoss = parseFloat(document.getElementById('anodePressureLoss').value) || 0;
    const cathodePressureLoss = parseFloat(document.getElementById('cathodePressureLoss').value) || 0;
    const coolingPressureLoss = parseFloat(document.getElementById('coolingPressureLoss').value) || 0;
    const waterDistribution = parseFloat(document.getElementById('waterDistribution').value) || 0;
    const anodeInletTemp = parseFloat(document.getElementById('anodeInletTemp').value) || 0;
    const gasSeparatorEfficiency = parseFloat(document.getElementById('gasSeparatorEfficiency').value) || 0;
    const intercoolerPressureLoss = parseFloat(document.getElementById('intercoolerPressureLoss').value) || 0;
    const compressorOutletTemp = parseFloat(document.getElementById('compressorOutletTemp').value) || 0;
    const glycolPercentage = parseFloat(document.getElementById('glycolPercentage').value) || 0;
    const humidifierEfficiency = parseFloat(document.getElementById('humidifierEfficiency').value) || 0;
    const humidifierDryLoss = parseFloat(document.getElementById('humidifierDryLoss').value) || 0;
    const humidifierWetLoss = parseFloat(document.getElementById('humidifierWetLoss').value) || 0;
    
    // 计算电堆参数 - 按照用户提供的正确逻辑计算
    // 字母对应关系: a=cellVoltage, b=cellCount, c=reactionArea, d=currentDensity, e=airRatio, f=hydrogenRatio, q=waterDistribution
    const stackCurrent = reactionArea * currentDensity; // 电堆电流(A) = c*d
    const stackVoltage = cellVoltage * cellCount; // 电堆电压(V) = a*b
    const stackPower = (stackCurrent * stackVoltage) / 1000; // 电堆功率(kW) = a*b*c*d/1000
    
    // 理论反应消耗
    const theoreticalHydrogenConsumption = (reactionArea * currentDensity * cellCount) / (96485 * 2); // 理论反应消耗氢气量(mol/s) = c*d*b/96485/2
    const theoreticalOxygenConsumption = theoreticalHydrogenConsumption / 2; // 理论反应消耗氧气量(mol/s)
    const theoreticalWaterProduction = theoreticalHydrogenConsumption; // 理论反应产水量(mol/s)
    
    // 实际入口流量
    const actualHydrogenFlow = theoreticalHydrogenConsumption * hydrogenRatio; // 实际入口H2流量(mol/s) = 理论值*f
    const actualAirFlow = (theoreticalHydrogenConsumption / 2) * airRatio / 0.21; // 实际入口Air流量(mol/s) = 理论值/2*e/0.21
    
    // 转换为NLPM
    const actualHydrogenFlowNLPM = actualHydrogenFlow * 22.4 * 60; // 实际入口H2流量(NLPM) = 实际值*22.4*60
    const actualAirFlowNLPM = actualAirFlow * 22.4 * 60; // 实际入口Air流量(NLPM) = 实际值*22.4*60
    
    // 反应产热量和电堆效率
    const reactionHeat = stackPower * (1.254 - cellVoltage) / cellVoltage; // 反应产热量(LHV-kW) = 电堆功率*(1.254-a)/a
    const stackEfficiency = (cellVoltage / 1.254) * 100; // 电堆效率(%) = a/1.254*100
    
    // 氢气子系统计算
    // 字母对应关系: k=hydrogenUtilization(氢气利用率), f=hydrogenRatio(氢气过量比), g=operatingTemp(操作温度), i=anodeInletTemp(阳极入口温度)
    // l=anodeInletPressure(阳极入口压力), n=anodePressureLoss(阳极压力损失), q=waterDistribution(水分布系数), s=gasSeparatorEfficiency(气液分离器效率)
    // r=anodeInletTemp(阳极入口温度)
    
    // 系统氢气参数计算
    const systemHydrogenConsumption = theoreticalHydrogenConsumption * 100 / hydrogenUtilization; // 系统消耗氢气量(mol/s) = 理论值*100/k
    const systemSupplyHydrogen = theoreticalHydrogenConsumption; // 系统供氢量(mol/s) = 理论值
    const systemHydrogenSupplyNLPM = systemHydrogenConsumption * 22.4 * 60; // 系统供氢量(NLPM) = 系统消耗*22.4*60
    const hydrogenExhaust = systemHydrogenSupplyNLPM * (1 - hydrogenUtilization / 100); // 氢气尾气排气(NLPM) = 系统供氢量*(1-k/100)
    const hydrogenRecirculation = theoreticalHydrogenConsumption * (hydrogenRatio - 1); // 出口氢气循环量(mol/s) = 理论值*(f-1)
    const hydrogenRecirculationNLPM = hydrogenRecirculation * 22.4 * 60; // 出口氢气循环量(NLPM) = 循环量*22.4*60
    
    // 水量迭代计算
    let inletStackWater = 0; // 进入电堆水量初始化为0
    let anodeOutletWater = 0; // 阳极出口总水量
    let anodeLiquidWater = 0; // 阳极出口液态水量
    let outletGaseousWater = 0; // 出口气态水量
    let anodeCondensationHeat = 0; // 阳极冷凝水放热
    let anodeOutletHumidity = 0; // 阳极出口相对湿度
    let saturatedVaporPressure = 0; // 对应的饱和蒸汽压
    let anodeOutletTemp = 0; // 阳极出口温度
    let anodeOutletPressure = 0; // 阳极出口压力
    let anodeInletHydrogenTemp = 0; // 阳极入口氢气温度
    let saturatedVaporPressure1 = 0; // 对应的饱和蒸汽压1
    let inletHydrogenHumidity = 0; // 入堆氢气相对湿度
    
    // 迭代计算5次
    for (let _ = 0; _ < 5; _++) {
        // 阳极出口总水量
        anodeOutletWater = theoreticalHydrogenConsumption * waterDistribution + inletStackWater;
        
        // 阳极出口温度
        anodeOutletTemp = operatingTemp;
        
        // 对应的饱和蒸汽压（使用多项式拟合公式）
        saturatedVaporPressure = 0.00000097 * Math.pow(anodeOutletTemp, 4) - 
                                0.00003455 * Math.pow(anodeOutletTemp, 3) + 
                                0.00371504 * Math.pow(anodeOutletTemp, 2) + 
                                0.01245629 * anodeOutletTemp + 0.71004367;
        
        // 阳极出口压力
        anodeOutletPressure = anodeInletPressure - anodePressureLoss;
        
        // 氢气出口相对湿度
        anodeOutletHumidity = anodeOutletPressure * 
                            (anodeOutletWater / (anodeOutletWater + hydrogenRecirculation)) / 
                            saturatedVaporPressure * 100;
        
        // 计算阳极出口液态水量
        if (anodeOutletHumidity > 100) {
            anodeLiquidWater = anodeOutletWater - 
                            hydrogenRecirculation * saturatedVaporPressure / 
                            (anodeOutletPressure - saturatedVaporPressure);
        } else {
            anodeLiquidWater = 0;
        }
        
        // 阳极冷凝水放热
        anodeCondensationHeat = anodeLiquidWater * 18 * 2258 / 1000; // 18是水的摩尔质量(g/mol), 2258是汽化潜热(J/g)
        
        // 出口气态水量
        outletGaseousWater = anodeOutletWater - anodeLiquidWater;
        
        // 更新进入电堆水量用于下一次迭代
        inletStackWater = anodeLiquidWater * (1 - gasSeparatorEfficiency / 100) + outletGaseousWater;
        
        // 阳极入口氢气温度
        anodeInletHydrogenTemp = anodeInletTemp;
        
        // 对应的饱和蒸汽压1（使用多项式拟合公式）
        saturatedVaporPressure1 = 0.00000097 * Math.pow(anodeInletHydrogenTemp, 4) - 
                                 0.00003455 * Math.pow(anodeInletHydrogenTemp, 3) + 
                                 0.00371504 * Math.pow(anodeInletHydrogenTemp, 2) + 
                                 0.01245629 * anodeInletHydrogenTemp + 0.71004367;
        
        // 入堆氢气相对湿度
        inletHydrogenHumidity = outletGaseousWater / (outletGaseousWater + systemSupplyHydrogen + hydrogenRecirculation) * 
                               anodeInletPressure / saturatedVaporPressure1 * 100;
    }
    
    // 水分布系数
    const waterDistributionCoefficient = waterDistribution;
    
    // 空气子系统计算
    // 字母对应关系: h=ambientTemp(环境温度), g=operatingTemp(操作温度), m=cathodeInletPressure(阴极入口压力)
    // o=cathodePressureLoss(阴极压力损失), q=waterDistribution(水分布系数)
    // i=tempDifference(温度差), c1=humidifierWetLoss(加湿器湿侧压力损失)
    const systemAirSupply = actualAirFlow; // 系统供空气量(mol/s)
    const systemAirSupplyNLPM = actualAirFlowNLPM; // 系统供空气量(NLPM)
    const airPumpInletTemp = ambientTemp; // 空气泵入口温度(℃)
    const outletAirFlow = actualAirFlow - theoreticalHydrogenConsumption / 2; // 出口空气流量(mol/s) = 实际入口Air流量 - 理论氢气消耗/2
    const outletAirFlowNLPM = outletAirFlow * 22.4 * 60; // 出口空气流量(NLPM) = 出口空气流量*22.4*60
    
    // 环境饱和蒸汽压(kPa) = 多项式拟合公式
    const ambientSaturatedVaporPressure = 0.00000097 * Math.pow(ambientTemp, 4) - 0.00003455 * Math.pow(ambientTemp, 3) + 0.00371504 * Math.pow(ambientTemp, 2) + 0.01245629 * ambientTemp + 0.71004367;
    
    // 从环境中带入水分(mol/s) = 湿度*环境饱和蒸汽压*实际入口Air流量/101/100
    const ambientWaterIntake = humidity * ambientSaturatedVaporPressure * actualAirFlow / 101 / 100;
    
    // 水量迭代计算
    let dryGasHumidificationWater = 0; // 干气加湿用水量初始化为0
    let cathodeOutletWater = 0; // 阴极出口总水量
    let cathodeOutletTemp = 0; // 阴极出口温度
    let saturatedVaporPressure2 = 0; // 对应的饱和蒸汽压
    let cathodeOutletPressure = 0; // 阴极出口压力
    let airOutletHumidity = 0; // 空气出口相对湿度
    let outletLiquidWater = 0; // 出口液态水量
    let condensationHeat = 0; // 冷凝水放热
    let outletWaterVaporPressure = 0; // 出口水蒸气分压(理论值)
    let outletWaterVaporPressure1 = 0; // 出口水蒸气分压(实际值)
    let outletDewPointTemp = 0; // 出口露点温度
    let intercoolerOutletTemp = 0; // 中冷器出口温度
    let humidifierDrySidePressure = 0; // 加湿器干侧出口压力
    let humidifierDrySideTemp = 0; // 加湿器干侧出口温度
    let humidifierDrySideSaturatedVaporPressure = 0; // 干侧出口饱和蒸汽压
    let humidifierDrySideHumidity = 0; // 干侧出口相对湿度
    let stackInletAirTemp = 0; // 电堆入口空气温度
    let stackInletSaturatedVaporPressure = 0; // 电堆入口饱和蒸汽压
    let stackInletAirHumidity = 0; // 电堆入口空气相对湿度
    let humidifierWetSidePressure = 0; // 加湿器湿侧出口压力
    let humidifierWetSideTemp = 0; // 加湿器湿侧出口温度
    let humidifierWetSideWater = 0; // 加湿器湿侧出口水量
    let humidifierWetSideSaturatedVaporPressure = 0; // 湿侧出口饱和蒸汽压
    let humidifierWetSideHumidity = 0; // 湿侧出口相对湿度
    
    // 迭代计算5次
    for (let _ = 0; _ < 5; _++) {
        // 阴极出口总水量(mol/s) = 理论产水量*(1-q) + 从环境中带入水分 + 干气加湿用水量
        cathodeOutletWater = theoreticalWaterProduction * (1 - waterDistribution) + ambientWaterIntake + dryGasHumidificationWater;
        
        // 阴极出口温度(℃) = 操作温度
        cathodeOutletTemp = operatingTemp;
        
        // 对应的饱和蒸汽压(kPa) = 多项式拟合公式
        saturatedVaporPressure2 = 0.00000097 * Math.pow(cathodeOutletTemp, 4) - 0.00003455 * Math.pow(cathodeOutletTemp, 3) + 0.00371504 * Math.pow(cathodeOutletTemp, 2) + 0.01245629 * cathodeOutletTemp + 0.71004367;
        
        // 阴极出口压力(kPa) = 阴极入口压力 - 阴极压损
        cathodeOutletPressure = cathodeInletPressure - cathodePressureLoss;
        
        // 空气出口相对湿度(%) = 阴极出口压力*(阴极出口总水量/(阴极出口总水量+出口空气流量))/对应的饱和蒸汽压*100
        airOutletHumidity = cathodeOutletPressure * (cathodeOutletWater / (cathodeOutletWater + outletAirFlow)) / saturatedVaporPressure2 * 100;
        
        // 出口液态水量计算
        if (airOutletHumidity > 100) {
            outletLiquidWater = cathodeOutletWater - outletAirFlow * saturatedVaporPressure2 / (cathodeOutletPressure - saturatedVaporPressure2);
        } else {
            outletLiquidWater = 0;
        }
        
        // 冷凝水放热(kW) = 出口液态水量*18*2258/1000
        condensationHeat = outletLiquidWater * 18 * 2258 / 1000; // 18是水的摩尔质量(g/mol), 2258是汽化潜热(J/g)
        
        // 出口水蒸气分压(理论值)(kPa) = 阴极出口压力*(阴极出口总水量/(阴极出口总水量+出口空气流量))
        outletWaterVaporPressure = cathodeOutletPressure * (cathodeOutletWater / (cathodeOutletWater + outletAirFlow));
        
        // 出口水蒸气分压(实际值)(kPa)
        if (airOutletHumidity > 100) {
            outletWaterVaporPressure1 = saturatedVaporPressure2;
        } else {
            outletWaterVaporPressure1 = outletWaterVaporPressure;
        }
        
        // 出口露点温度(℃) = 1657.46 / (7.07406 - log10(出口水蒸气分压)) - 227.02
        outletDewPointTemp = 1657.46 / (7.07406 - Math.log10(outletWaterVaporPressure)) - 227.02;
        
        // 中冷器出口温度(℃) = 操作温度 - 温度差/2
        intercoolerOutletTemp = operatingTemp - tempDifference / 2;
        
        // 干气加湿用水量(mol/s) = (阴极出口总水量 - 出口液态水量)*a1/100，假设a1为加湿器效率
        dryGasHumidificationWater = (cathodeOutletWater - outletLiquidWater) * humidifierEfficiency / 100;
        
        // 加湿器干侧出口压力(kPa) = 阴极入口压力
        humidifierDrySidePressure = cathodeInletPressure;
        
        // 加湿器干侧出口温度(℃) = (中冷器出口温度 + 操作温度 - 温度差)/2
        humidifierDrySideTemp = (intercoolerOutletTemp + operatingTemp - tempDifference) / 2;
        
        // 加湿器干侧出口饱和蒸汽压(kPa) = 多项式拟合公式
        humidifierDrySideSaturatedVaporPressure = 0.00000097 * Math.pow(humidifierDrySideTemp, 4) - 0.00003455 * Math.pow(humidifierDrySideTemp, 3) + 0.00371504 * Math.pow(humidifierDrySideTemp, 2) + 0.01245629 * humidifierDrySideTemp + 0.71004367;
        
        // 加湿器干侧出口相对湿度(%) = 干气加湿用水量/实际入口Air流量*加湿器干侧出口压力/干侧出口饱和蒸汽压*100
        humidifierDrySideHumidity = dryGasHumidificationWater / actualAirFlow * humidifierDrySidePressure / humidifierDrySideSaturatedVaporPressure * 100;
        
        // 电堆入口空气温度(℃) = 加湿器干侧出口温度 - 1
        stackInletAirTemp = humidifierDrySideTemp - 1;
        
        // 电堆入口饱和蒸汽压(kPa) = 多项式拟合公式
        stackInletSaturatedVaporPressure = 0.00000097 * Math.pow(stackInletAirTemp, 4) - 0.00003455 * Math.pow(stackInletAirTemp, 3) + 0.00371504 * Math.pow(stackInletAirTemp, 2) + 0.01245629 * stackInletAirTemp + 0.71004367;
        
        // 电堆入口空气相对湿度(%) = 干气加湿用水量/实际入口Air流量*加湿器干侧出口压力/电堆入口饱和蒸汽压*100
        stackInletAirHumidity = dryGasHumidificationWater / actualAirFlow * humidifierDrySidePressure / stackInletSaturatedVaporPressure * 100;
        
        // 加湿器湿侧出口压力(kPa) = 阴极出口压力 - 加湿器湿侧压力损失
        humidifierWetSidePressure = cathodeOutletPressure - humidifierWetLoss;
        
        // 加湿器湿侧出口温度(℃) = 加湿器干侧出口温度
        humidifierWetSideTemp = humidifierDrySideTemp;
        
        // 加湿器湿侧出口水量(mol/s) = 阴极出口总水量 - 出口液态水量 - 干气加湿用水量
        humidifierWetSideWater = (cathodeOutletWater - outletLiquidWater - dryGasHumidificationWater);
        
        // 加湿器湿侧出口饱和蒸汽压(kPa) = 多项式拟合公式
        humidifierWetSideSaturatedVaporPressure = 0.00000097 * Math.pow(humidifierWetSideTemp, 4) - 0.00003455 * Math.pow(humidifierWetSideTemp, 3) + 0.00371504 * Math.pow(humidifierWetSideTemp, 2) + 0.01245629 * humidifierWetSideTemp + 0.71004367;
        
        // 加湿器湿侧出口相对湿度(%) = 湿侧出口水量/出口空气流量*湿侧出口压力/湿侧出口饱和蒸汽压*100
        humidifierWetSideHumidity = humidifierWetSideWater / outletAirFlow * humidifierWetSidePressure / humidifierWetSideSaturatedVaporPressure * 100;
    }
    const cathodeMaxWaterVapor = (cathodeOutletPressure * 1000) * (0.622 / (8314.3 * (cathodeOutletTemp + 273.15))); // 最大水蒸气含量(kg/kg干气)
    const cathodeActualWaterVapor = Math.min(cathodeOutletWater * 0.018, cathodeMaxWaterVapor * (systemAirSupply * 29e-3)); // 实际水蒸气量(kg/s)
      
      // 中冷器参数
    
    
    // 换热子系统计算
    const coolantDensity = glycolPercentage * 1.7657 + 981.43; // 冷却液密度(kg/m3)，乙二醇溶液
    const coolantSpecificHeat = -0.0002 * Math.pow(glycolPercentage, 2) - 0.004 * glycolPercentage + 4.2; // 冷却液比热(kJ/(kg·K))
    const reactionHeat1 = reactionHeat; // 反应产热量(LHV-kW)
    const superSaturatedWaterCondensationHeat = condensationHeat + anodeCondensationHeat; // 过饱和水冷凝放热量(kW)
    const intercoolerHeatLoad = 1.005 * (systemAirSupply * 28.96 / 1000) * (compressorOutletTemp - intercoolerOutletTemp); // 中冷器热负荷(kW)
    const systemTotalHeatLoad = intercoolerHeatLoad + superSaturatedWaterCondensationHeat + reactionHeat1; // 系统总热负荷(kW)
    const stackCoolantFlow = systemTotalHeatLoad / tempDifference / coolantDensity / coolantSpecificHeat * 1000 * 60; // 电堆冷却液流量(L/min)
    
    // COG加湿器计算
    
    // 改进干气加湿用水量计算：基于实际需要加湿的空气量和目标湿度
    
    // 改进湿侧出口水量计算：基于实际湿度平衡
    
    // 更新结果显示
    document.getElementById('stackCurrent').textContent = stackCurrent.toFixed(2);
    document.getElementById('stackVoltage').textContent = stackVoltage.toFixed(2);
    document.getElementById('stackPower').textContent = stackPower.toFixed(2);
    document.getElementById('theoreticalHydrogenConsumption').textContent = theoreticalHydrogenConsumption.toFixed(4);
    document.getElementById('theoreticalOxygenConsumption').textContent = theoreticalOxygenConsumption.toFixed(4);
    document.getElementById('theoreticalWaterProduction').textContent = theoreticalWaterProduction.toFixed(4);
    document.getElementById('actualHydrogenFlow').textContent = actualHydrogenFlow.toFixed(4);
    document.getElementById('actualAirFlow').textContent = actualAirFlow.toFixed(4);
    document.getElementById('actualHydrogenFlowNLPM').textContent = actualHydrogenFlowNLPM.toFixed(2);
    document.getElementById('actualAirFlowNLPM').textContent = actualAirFlowNLPM.toFixed(2);
    document.getElementById('reactionHeat').textContent = reactionHeat.toFixed(2);
    document.getElementById('stackEfficiency').textContent = stackEfficiency.toFixed(2);
    
    document.getElementById('systemHydrogenConsumption').textContent = systemHydrogenConsumption.toFixed(4);
    document.getElementById('systemHydrogenSupplyNLPM').textContent = systemHydrogenSupplyNLPM.toFixed(2);
    document.getElementById('hydrogenExhaust').textContent = hydrogenExhaust.toFixed(2);
    document.getElementById('hydrogenRecirculation').textContent = hydrogenRecirculation.toFixed(4);
    document.getElementById('hydrogenRecirculationNLPM').textContent = hydrogenRecirculationNLPM.toFixed(2);
    document.getElementById('anodeOutletWater').textContent = anodeOutletWater.toFixed(4);
    document.getElementById('anodeOutletTemp').textContent = anodeOutletTemp.toFixed(1);
    document.getElementById('saturatedVaporPressure').textContent = saturatedVaporPressure.toFixed(2);
    document.getElementById('anodeOutletPressure').textContent = anodeOutletPressure.toFixed(1);
    document.getElementById('anodeOutletHumidity').textContent = anodeOutletHumidity.toFixed(1);
    document.getElementById('anodeLiquidWater').textContent = anodeLiquidWater.toFixed(4);
    document.getElementById('anodeCondensationHeat').textContent = anodeCondensationHeat.toFixed(2);
    document.getElementById('outletGaseousWater').textContent = outletGaseousWater.toFixed(4);
    document.getElementById('anodeInletHydrogenTemp').textContent = anodeInletHydrogenTemp.toFixed(1);
    document.getElementById('saturatedVaporPressure1').textContent = saturatedVaporPressure1.toFixed(2);
    document.getElementById('inletHydrogenHumidity').textContent = inletHydrogenHumidity.toFixed(1);
    document.getElementById('inletStackWater').textContent = inletStackWater.toFixed(4);
    document.getElementById('waterDistributionCoefficient').textContent = waterDistributionCoefficient.toFixed(2);
    
    document.getElementById('systemAirSupply').textContent = systemAirSupply.toFixed(4);
    document.getElementById('systemAirSupplyNLPM').textContent = systemAirSupplyNLPM.toFixed(2);
    document.getElementById('airPumpInletTemp').textContent = airPumpInletTemp.toFixed(1);
    document.getElementById('outletAirFlow').textContent = outletAirFlow.toFixed(4);
    document.getElementById('outletAirFlowNLPM').textContent = outletAirFlowNLPM.toFixed(2);
    document.getElementById('cathodeOutletWater').textContent = cathodeOutletWater.toFixed(4);
    document.getElementById('cathodeOutletTemp').textContent = cathodeOutletTemp.toFixed(1);
    document.getElementById('saturatedVaporPressure2').textContent = saturatedVaporPressure2.toFixed(2);
    document.getElementById('cathodeOutletPressure').textContent = cathodeOutletPressure.toFixed(1);
    document.getElementById('airOutletHumidity').textContent = airOutletHumidity.toFixed(1);
    document.getElementById('outletLiquidWater').textContent = outletLiquidWater.toFixed(4);
    document.getElementById('condensationHeat').textContent = condensationHeat.toFixed(2);
    document.getElementById('outletWaterVaporPressure').textContent = outletWaterVaporPressure.toFixed(2);
    document.getElementById('outletWaterVaporPressure1').textContent = outletWaterVaporPressure1.toFixed(2);
    document.getElementById('outletDewPointTemp').textContent = outletDewPointTemp.toFixed(1);
    document.getElementById('intercoolerOutletTemp').textContent = intercoolerOutletTemp.toFixed(1);
    document.getElementById('ambientSaturatedVaporPressure').textContent = ambientSaturatedVaporPressure.toFixed(2);
    document.getElementById('ambientWaterIntake').textContent = ambientWaterIntake.toFixed(4);
    
    document.getElementById('coolantDensity').textContent = coolantDensity.toFixed(0);
    document.getElementById('coolantSpecificHeat').textContent = coolantSpecificHeat.toFixed(2);
    document.getElementById('reactionHeat1').textContent = reactionHeat1.toFixed(2);
    document.getElementById('superSaturatedWaterCondensationHeat').textContent = superSaturatedWaterCondensationHeat.toFixed(2);
    document.getElementById('intercoolerHeatLoad').textContent = intercoolerHeatLoad.toFixed(2);
    document.getElementById('systemTotalHeatLoad').textContent = systemTotalHeatLoad.toFixed(2);
    document.getElementById('stackCoolantFlow').textContent = stackCoolantFlow.toFixed(2);
    
    document.getElementById('dryGasHumidificationWater').textContent = dryGasHumidificationWater.toFixed(4);
    document.getElementById('humidifierDrySidePressure').textContent = humidifierDrySidePressure.toFixed(1);
    document.getElementById('humidifierDrySideTemp').textContent = humidifierDrySideTemp.toFixed(1);
    document.getElementById('humidifierDrySideSaturatedVaporPressure').textContent = humidifierDrySideSaturatedVaporPressure.toFixed(2);
    document.getElementById('humidifierDrySideHumidity').textContent = humidifierDrySideHumidity.toFixed(1);
    document.getElementById('humidifierWetSidePressure').textContent = humidifierWetSidePressure.toFixed(1);
    document.getElementById('humidifierWetSideTemp').textContent = humidifierWetSideTemp.toFixed(1);
    document.getElementById('humidifierWetSideWater').textContent = humidifierWetSideWater.toFixed(4);
    document.getElementById('humidifierWetSideSaturatedVaporPressure').textContent = humidifierWetSideSaturatedVaporPressure.toFixed(2);
    document.getElementById('humidifierWetSideHumidity').textContent = humidifierWetSideHumidity.toFixed(1);
}

// 计算饱和蒸汽压
function calculateSaturatedVaporPressure(temperature) {
    // 使用简化的Antoine方程计算水的饱和蒸汽压
    const A = 8.07131;
    const B = 1730.63;
    const C = 233.426;
    const log10P = A - B / (C + temperature);
    return Math.pow(10, log10P) * 1.33322; // 转换为kPa
}

// 计算露点温度
function calculateDewPoint(vaporPressure) {
    // 简化的露点温度计算
    const A = 8.07131;
    const B = 1730.63;
    const C = 233.426;
    const mmHg = vaporPressure / 1.33322;
    const log10P = Math.log10(mmHg);
    return B / (A - log10P) - C;
}

// 第二页：空气热力计算
function calculateAirThermal() {
    // 获取输入值
    const airGasConstant = parseFloat(document.getElementById('airGasConstant').value) || 0;
    const airSpecificHeat = parseFloat(document.getElementById('airSpecificHeat').value) || 0;
    const airSpecificHeatRatio = parseFloat(document.getElementById('airSpecificHeatRatio').value) || 0;
    const altitude = parseFloat(document.getElementById('altitude').value) || 0;
    const airPumpEfficiency = parseFloat(document.getElementById('airPumpEfficiency').value) || 0;
    
    // 从第一页获取相关参数
    const actualAirFlow = parseFloat(document.getElementById('actualAirFlow').textContent) || 0;
    const ambientTemp = parseFloat(document.getElementById('ambientTemp').value) || 0;
    const cathodeInletPressure = parseFloat(document.getElementById('cathodeInletPressure').value) || 0;
    const intercoolerPressureLoss = parseFloat(document.getElementById('intercoolerPressureLoss').value) || 0;
    
    // 计算高度相关参数
    let pressureAtHeight, temperatureKAtHeight, temperatureCAtHeight, densityAtHeight;
    
    if (altitude > 11000) {
        pressureAtHeight = 22631.8 * Math.exp((11000 - altitude) / 6340); // 在高度h上的压力(Pa) - 高空
        temperatureKAtHeight = 216.65; // 在高度h上的温度(K) - 高空
        densityAtHeight = 0.3639 * Math.exp((11000 - altitude) / 6340); // 在高度h上的密度(kg/m3) - 高空
    } else {
        pressureAtHeight = 101325 * Math.pow(1 - altitude / 44330, 5.25588); // 在高度h上的压力(Pa) - 低空
        temperatureKAtHeight = 288.15 - 0.0065 * altitude; // 在高度h上的温度(K) - 低空
        densityAtHeight = 1.225 * Math.pow(1 - altitude / 44330, 4.25588); // 在高度h上的密度(kg/m3) - 低空
    }
    
    temperatureCAtHeight = temperatureKAtHeight - 273.15; // 在高度h上的温度(℃)
    
    // 计算空气流量
    const airInletVolumeFlow = actualAirFlow * 0.022414 * (temperatureKAtHeight / 273.15) * (101325 / pressureAtHeight); // 空气入口体积流量(m^3/s)
    const airInletMassFlow = airInletVolumeFlow * densityAtHeight * 1000; // 空气入口质量流量(g/s)
    
    // 计算空压机参数
    const outletAirPressure = (cathodeInletPressure + intercoolerPressureLoss) * 1000; // 出口空气压力(Pa) = (阴极入口压力 + 中冷器压损) * 1000
    const compressorPressureRatio = outletAirPressure / pressureAtHeight; // 空压机压比(ε)
    
    // 考虑空气泵效率的出口温度计算公式
    const outletAirTempK = temperatureKAtHeight * (1 + ((Math.pow(compressorPressureRatio, 0.286) - 1) / (airPumpEfficiency / 100))); // 出口空气温度(K)
    const outletAirTempC = outletAirTempK - 273.15; // 出口空气温度(℃)
    const airTempRise = outletAirTempK - temperatureKAtHeight; // 空气温升(K)
    
    // 计算功
    // 定熵压缩轴功公式：(x/(x-1))*在高度h上的压力_value*空气入口体积流量_value*(1-(出口空气压力_value/在高度h上的压力_value)**((x-1)/x))
    const isentropicCompressionWork = (airSpecificHeatRatio / (airSpecificHeatRatio - 1)) * pressureAtHeight * airInletVolumeFlow * (1 - Math.pow(compressorPressureRatio, (airSpecificHeatRatio - 1) / airSpecificHeatRatio)); // 定熵压缩轴功(W)
    // 空压机功耗公式：空压机功耗_value = 空气入口质量流量_value*a4*空气温升_value，其中a4为空气定压比热比
    // 注意：airSpecificHeat的单位是kJ/(kg·K)，需要转换为J/(g·K)（1 kJ = 1000 J，1 kg = 1000 g，所以数值相同）
    const airConstantPressureSpecificHeat = parseFloat(document.getElementById('airSpecificHeat').value) || 1.005; // 空气定压比热比 a4 (kJ/(kg·K))
    const compressorPowerConsumption = airInletMassFlow * airConstantPressureSpecificHeat * airTempRise; // 空压机功耗(W)
    
    // 更新结果显示
    document.getElementById('pressureAtHeight').textContent = pressureAtHeight.toFixed(2);
    document.getElementById('densityAtHeight').textContent = densityAtHeight.toFixed(4);
    document.getElementById('temperatureKAtHeight').textContent = temperatureKAtHeight.toFixed(2);
    document.getElementById('temperatureCAtHeight').textContent = temperatureCAtHeight.toFixed(2);
    document.getElementById('airInletVolumeFlow').textContent = airInletVolumeFlow.toFixed(4);
    document.getElementById('airInletMassFlow').textContent = airInletMassFlow.toFixed(2);
    document.getElementById('outletAirPressure').textContent = outletAirPressure.toFixed(2);
    document.getElementById('compressorPressureRatio').textContent = compressorPressureRatio.toFixed(2);
    document.getElementById('outletAirTempK').textContent = outletAirTempK.toFixed(2);
    document.getElementById('outletAirTempC').textContent = outletAirTempC.toFixed(2);
    document.getElementById('airTempRise').textContent = airTempRise.toFixed(2);
    document.getElementById('isentropicCompressionWork').textContent = isentropicCompressionWork.toFixed(2);
    document.getElementById('compressorPowerConsumption').textContent = compressorPowerConsumption.toFixed(2);
}

// 第四页：阀门流体计算
function calculateValveFlow() {
    // 获取输入值
    const flowRateNLPM = parseFloat(document.getElementById('flowRateNLPM').value) || 0;
    const inletPressure = parseFloat(document.getElementById('inletPressure').value) || 0;
    const outletPressure = parseFloat(document.getElementById('outletPressure').value) || 0;
    const fluidTemperature = parseFloat(document.getElementById('fluidTemperature').value) || 0;
    const mediumType = document.getElementById('mediumType');
    const density = parseFloat(mediumType.value) || 0;
    
    // 转换单位
    const flowRateM3h = flowRateNLPM * 60 / 1000; // 转换为m3/h
    const deltaP = inletPressure - outletPressure; // 压差(bar)
    const temperatureK = fluidTemperature + 273.15; // 温度(K)
    
    let KvValue = 0;
    
    // 判断是否为水（液体）
    if (density >= 1000) {
        // 水的Kv计算公式
        KvValue = flowRateM3h * Math.sqrt(density / (1000 * deltaP));
    } else {
        // 气体的Kv计算公式
        if (outletPressure > inletPressure / 2) {
            // 次临界
            KvValue = flowRateM3h / 514 * Math.sqrt(temperatureK * density / (outletPressure * deltaP));
        } else {
            // 超临界
            KvValue = flowRateM3h / (257 * inletPressure) * Math.sqrt(temperatureK * density);
        }
    }
    
    // 计算阀门直径 - 使用多项式计算公式
    let valveDiameter = 0;
    if (KvValue > 0) {
        // 多项式计算公式：阀门口径_value = -77.861*Kv_value**6+256.11*Kv_value**5-331.17*Kv_value**4+215.74*Kv_value**3-77.502*Kv_value**2+20.183*Kv_value+0.476
        valveDiameter = -77.861 * Math.pow(KvValue, 6) + 
                       256.11 * Math.pow(KvValue, 5) - 
                       331.17 * Math.pow(KvValue, 4) + 
                       215.74 * Math.pow(KvValue, 3) - 
                       77.502 * Math.pow(KvValue, 2) + 
                       20.183 * KvValue + 
                       0.476;
        
        // 确保结果合理，不小于0
        valveDiameter = Math.max(0, valveDiameter);
    } else {
        valveDiameter = 0;
    }
    
    // 更新结果显示
    const kvElement = document.getElementById('KvValue');
    const dnElement = document.getElementById('valveDiameter');
    kvElement.textContent = KvValue.toFixed(4);
    dnElement.textContent = valveDiameter.toFixed(3);
    
    // 当Kv值大于1或小于0.012时，将Kv值和DN值显示为红色
    if (KvValue > 1 || KvValue < 0.012) {
        kvElement.style.color = 'red';
        dnElement.style.color = 'red';
    } else {
        kvElement.style.color = '';
        dnElement.style.color = '';
    }
}

// 第五页：管路压损计算
function calculatePipelinePressure() {
    // 气路计算参数
    const gasStdDensity = parseFloat(document.getElementById('gasStdDensity').value) || 0;
    const gasPressure = parseFloat(document.getElementById('gasPressure').value) || 0;
    const gasTemperature = parseFloat(document.getElementById('gasTemperature').value) || 0;
    const gasFlowRate = parseFloat(document.getElementById('gasFlowRate').value) || 0;
    const mainPipeDiameter = parseFloat(document.getElementById('mainPipeDiameter').value) || 0;
    const stackCount = parseInt(document.getElementById('stackCount').value) || 0;
    const branchPipeDiameter = parseFloat(document.getElementById('branchPipeDiameter').value) || 0;
    const gasViscosity = parseFloat(document.getElementById('gasViscosity').value) || 0;
    const pipeRoughness = parseFloat(document.getElementById('pipeRoughness').value) || 0;
    const pipeLength = parseFloat(document.getElementById('pipeLength').value) || 0;
    const elbowCount = parseInt(document.getElementById('elbowCount').value) || 0;
    const teeCount = parseInt(document.getElementById('teeCount').value) || 0;
    
    // 水路计算参数
    const coolantDensityWater = parseFloat(document.getElementById('coolantDensityWater').value) || 0;
    const waterFlowRate = parseFloat(document.getElementById('waterFlowRate').value) || 0;
    const waterMainPipeDiameter = parseFloat(document.getElementById('waterMainPipeDiameter').value) || 0;
    const waterStackCount = parseInt(document.getElementById('waterStackCount').value) || 0;
    const waterBranchPipeDiameter = parseFloat(document.getElementById('waterBranchPipeDiameter').value) || 0;
    const waterViscosity = parseFloat(document.getElementById('waterViscosity').value) || 0;
    const waterPipeRoughness = parseFloat(document.getElementById('waterPipeRoughness').value) || 0;
    const waterPipeLength = parseFloat(document.getElementById('waterPipeLength').value) || 0;
    const waterElbowCount = parseInt(document.getElementById('waterElbowCount').value) || 0;
    const waterTeeCount = parseInt(document.getElementById('waterTeeCount').value) || 0;
    
    // 气路计算
    const gasDensity = gasStdDensity * (273.15 / gasTemperature) * (gasPressure / 101325); // 介质密度(kg/m3) = w2*273.15/b2*a2/101325
    const gasFlowRateM3s = (gasFlowRate / 1000 / 60) * (101325 / gasPressure) * (gasTemperature / 273.15); // 介质流量(m3/s) = c2/1000/60*101325/a2*b2/273.15
    const mainPipeArea = 0.25 * Math.PI * Math.pow(mainPipeDiameter, 2) / 1000000; // 主管面积(m2) = 0.25*3.14159*d2**2/1000000
    const mainPipeVelocity = gasFlowRateM3s / mainPipeArea; // 主管流速(m/s)
    const branchPipeArea = 0.25 * Math.PI * Math.pow(branchPipeDiameter, 2) / 1000000; // 分堆入口管面积(m2) = 0.25*3.14159*f2**2/1000000
    const branchPipeVelocity = gasFlowRateM3s / (stackCount * branchPipeArea); // 分堆入口管流速(m/s) = 介质流量_value/e2/分堆入口管面积_value
    
    // 雷诺数和摩擦系数
    const reynoldsNumber = (gasDensity * mainPipeVelocity * mainPipeDiameter) / (gasViscosity * 1000); // 雷诺数 = 介质密度_value*主管流速_value*d2/g2/1000
    // 使用用户提供的摩擦系数计算公式
    const frictionCoefficient = Math.pow(-0.5 / Math.log10(pipeRoughness / (3.7 * mainPipeDiameter)), 2); // 摩擦系数 = (-0.5 / math.log10(h2/3.7/d2))**2
    const pipeResistance = frictionCoefficient * pipeLength / mainPipeDiameter * gasDensity * Math.pow(mainPipeVelocity, 2) / 2; // 管道阻力 = 摩擦系数_value*i2/d2*介质密度_value*主管流速_value**2/2
    
    // 局部阻力
    const elbowFrictionCoefficient = 30 * frictionCoefficient; // 弯头摩擦系数 = 30*摩擦系数_value
    const teeFrictionCoefficient = 60 * frictionCoefficient; // 三通摩擦系数 = 60*摩擦系数_value
    const elbowResistance = elbowCount * 0.5 * elbowFrictionCoefficient * gasDensity * Math.pow(mainPipeVelocity, 2) / 1000; // 弯头阻力(kPa) = j2*0.5*弯头摩擦系数_value*介质密度_value*主管流速_value**2/1000
    const teeResistance = teeCount * 0.5 * teeFrictionCoefficient * gasDensity * Math.pow(mainPipeVelocity, 2) / 1000; // 三通阻力(kPa) = k2*0.5*三通摩擦系数_value*介质密度_value*主管流速_value**2/1000
    const localResistance = elbowResistance + teeResistance; // 局部阻力(kPa)
    const systemResistance = pipeResistance + localResistance; // 管系阻力(kPa)
    
    // 水路计算 - 按照用户提供的公式修改
    const waterFlowRateM3s = waterFlowRate / 1000 / 60; // 介质流量(m3/s) = c3/1000/60
    const waterMainPipeArea = 0.25 * Math.PI * Math.pow(waterMainPipeDiameter, 2) / 1000000; // 主管面积(m2) = 0.25*3.14159*d3**2/1000000
    const waterMainPipeVelocity = waterFlowRateM3s / waterMainPipeArea; // 主管流速(m/s) = 介质流量1_value/主管面积1_value
    const waterBranchPipeArea = 0.25 * Math.PI * Math.pow(waterBranchPipeDiameter, 2) / 1000000; // 分堆入口管面积(m2) = 0.25*3.14159*f3**2/1000000
    const waterBranchPipeVelocity = waterFlowRateM3s / waterStackCount / waterBranchPipeArea; // 分堆入口管流速(m/s) = 介质流量1_value/e3/分堆入口管面积1_value
    
    // 雷诺数和摩擦系数 - 按照用户提供的公式修改
    const waterReynoldsNumber = coolantDensityWater * waterMainPipeVelocity * waterMainPipeDiameter / waterViscosity / 1000; // 雷诺数 = w3*主管流速1_value*d3/g3/1000
    const waterFrictionCoefficient = Math.pow(-0.5 / Math.log10(waterPipeRoughness / (3.7 * waterMainPipeDiameter)), 2); // 摩擦系数 = (-0.5 / math.log10(h3/3.7/d3))**2
    const waterPipeResistance = waterFrictionCoefficient * waterPipeLength / waterMainPipeDiameter * coolantDensityWater * Math.pow(waterMainPipeVelocity, 2) / 2; // 管道阻力 = 摩擦系数1_value*i3/d3*w3*主管流速1_value**2/2
    
    // 局部阻力 - 按照用户提供的公式修改
    const waterElbowFrictionCoefficient = 30 * waterFrictionCoefficient; // 弯头摩擦系数 = 30*摩擦系数1_value
    const waterTeeFrictionCoefficient = 60 * waterFrictionCoefficient; // 三通摩擦系数 = 60*摩擦系数1_value
    const waterElbowResistance = waterElbowCount * 0.5 * waterElbowFrictionCoefficient * coolantDensityWater * Math.pow(waterMainPipeVelocity, 2) / 1000; // 弯头阻力(kPa) = j3*0.5*弯头摩擦系数1_value*w3*主管流速1_value**2/1000
    const waterTeeResistance = waterTeeCount * 0.5 * waterTeeFrictionCoefficient * coolantDensityWater * Math.pow(waterMainPipeVelocity, 2) / 1000; // 三通阻力(kPa) = k3*0.5*三通摩擦系数1_value*w3*主管流速1_value**2/1000
    const waterLocalResistance = waterElbowResistance + waterTeeResistance; // 局部阻力(kPa)
    const waterSystemResistance = waterPipeResistance + waterLocalResistance; // 管系阻力(kPa)
    
    // 更新结果显示
    document.getElementById('gasDensity').textContent = gasDensity.toFixed(3);
    document.getElementById('gasFlowRateM3s').textContent = gasFlowRateM3s.toFixed(4);
    document.getElementById('mainPipeArea').textContent = mainPipeArea.toFixed(4);
    document.getElementById('mainPipeVelocity').textContent = mainPipeVelocity.toFixed(2);
    document.getElementById('branchPipeArea').textContent = branchPipeArea.toFixed(4);
    document.getElementById('branchPipeVelocity').textContent = branchPipeVelocity.toFixed(2);
    document.getElementById('reynoldsNumber').textContent = reynoldsNumber.toFixed(0);
    document.getElementById('frictionCoefficient').textContent = frictionCoefficient.toFixed(4);
    document.getElementById('pipeResistance').textContent = pipeResistance.toFixed(2);
    document.getElementById('elbowFrictionCoefficient').textContent = elbowFrictionCoefficient.toFixed(2);
    document.getElementById('teeFrictionCoefficient').textContent = teeFrictionCoefficient.toFixed(1);
    document.getElementById('elbowResistance').textContent = elbowResistance.toFixed(2);
    document.getElementById('teeResistance').textContent = teeResistance.toFixed(2);
    document.getElementById('localResistance').textContent = localResistance.toFixed(2);
    document.getElementById('systemResistance').textContent = systemResistance.toFixed(2);
    
    document.getElementById('waterFlowRateM3s').textContent = waterFlowRateM3s.toFixed(4);
    document.getElementById('waterMainPipeArea').textContent = waterMainPipeArea.toFixed(4);
    document.getElementById('waterMainPipeVelocity').textContent = waterMainPipeVelocity.toFixed(2);
    document.getElementById('waterBranchPipeArea').textContent = waterBranchPipeArea.toFixed(4);
    document.getElementById('waterBranchPipeVelocity').textContent = waterBranchPipeVelocity.toFixed(2);
    document.getElementById('waterReynoldsNumber').textContent = waterReynoldsNumber.toFixed(0);
    document.getElementById('waterFrictionCoefficient').textContent = waterFrictionCoefficient.toFixed(4);
    document.getElementById('waterPipeResistance').textContent = waterPipeResistance.toFixed(2);
    document.getElementById('waterElbowFrictionCoefficient').textContent = waterElbowFrictionCoefficient.toFixed(2);
    document.getElementById('waterTeeFrictionCoefficient').textContent = waterTeeFrictionCoefficient.toFixed(1);
    document.getElementById('waterElbowResistance').textContent = waterElbowResistance.toFixed(2);
    document.getElementById('waterTeeResistance').textContent = waterTeeResistance.toFixed(2);
    document.getElementById('waterLocalResistance').textContent = waterLocalResistance.toFixed(2);
    document.getElementById('waterSystemResistance').textContent = waterSystemResistance.toFixed(2);
}

// 第六页：换热器/中冷器计算
function calculateHeatExchanger() {
    // 散热器参数
    const coolantHeatRatio = parseFloat(document.getElementById('coolantHeatRatio').value) || 0;
    const airTempDifference = parseFloat(document.getElementById('airTempDifference').value) || 0;
    const radiatorKa = parseFloat(document.getElementById('radiatorKa').value) || 0;
    const fanCount = parseInt(document.getElementById('fanCount').value) || 0;
    const fanAreaRatio = parseFloat(document.getElementById('fanAreaRatio').value) || 0;
    const fanDiameter = parseFloat(document.getElementById('fanDiameter').value) || 0;
    
    // 中冷器参数
    const coolantTempDiff = parseFloat(document.getElementById('coolantTempDiff').value) || 0;
    const intercoolerKa = parseFloat(document.getElementById('intercoolerKa').value) || 0;
    
    // 从第一页获取相关参数
    const systemTotalHeatLoad = parseFloat(document.getElementById('systemTotalHeatLoad').textContent) || 0;
    const ambientTemp = parseFloat(document.getElementById('ambientTemp').value) || 0;
    const coolantDensity = parseFloat(document.getElementById('coolantDensity').textContent) || 0;
    const coolantSpecificHeat = parseFloat(document.getElementById('coolantSpecificHeat').textContent) || 0;
    const intercoolerHeatLoad = parseFloat(document.getElementById('intercoolerHeatLoad').textContent) || 0;
    const compressorOutletTemp = parseFloat(document.getElementById('compressorOutletTemp').value) || 0;
    const intercoolerOutletTemp = parseFloat(document.getElementById('intercoolerOutletTemp').textContent) || 0;
    const actualAirFlowNLPM = parseFloat(document.getElementById('actualAirFlowNLPM').textContent) || 0;
    const stackCoolantFlow = parseFloat(document.getElementById('stackCoolantFlow').textContent) || 0;
    // 获取操作温度和操作温差 - 根据用户要求修改
    const operatingTemp = parseFloat(document.getElementById('operatingTemp').value) || 25; // 操作温度(℃)，默认为25℃
    const tempDifference = parseFloat(document.getElementById('tempDifference').value) || 5; // 操作温差(℃)，默认为5℃
    
    // 散热器计算 - 修复温度计算和避免NaN问题
    const a6 = coolantHeatRatio || 1; // 系数a6，默认为1
    const b6 = Math.max(0.1, airTempDifference); // 系数b6，确保大于0
    const c6 = Math.max(0.1, radiatorKa); // 系数c6，确保大于0
    const d6 = Math.max(1, fanCount); // 系数d6，确保至少为1
    const e6 = Math.max(0.1, fanAreaRatio); // 系数e6，确保大于0
    const f6 = Math.max(0.1, fanDiameter); // 系数f6，确保大于0
    
    const radiatorSystemTotalHeatLoad = systemTotalHeatLoad || 0; // 系统总热负荷(kW)
    const radiatorAmbientTemp = ambientTemp || 25; // 环境温度(℃)，默认为25℃
    const radiatorCoolantDensity = coolantDensity || 1000; // 冷却液密度(kg/m3)，默认为1000
    const radiatorCoolantSpecificHeat = coolantSpecificHeat || 4.18; // 冷却液比热(kJ/(kg·K))，默认为4.18
    // 按照用户要求修改：冷却水进口温度 = 操作温度，冷却水出口温度 = 操作温度 - 操作温差
    const radiatorCoolantInletTemp = operatingTemp; // 冷却水进口温度(℃) = 操作温度
    const radiatorCoolantOutletTemp = operatingTemp - tempDifference; // 冷却水出口温度(℃) = 操作温度 - 操作温差
    const radiatorCoolantFlow = Math.max(0.1, stackCoolantFlow); // 冷却循环流量(L/min)，确保大于0
    
    const radiatorOutletAirTemp = radiatorAmbientTemp + b6; // 冷却空气出散热器温度(℃)
    
    // 对数温差计算 - 修复可能导致NaN的问题
    const deltaT1 = radiatorCoolantInletTemp - radiatorOutletAirTemp; // ΔT1_value
    const deltaT2 = Math.max(0.1, radiatorCoolantOutletTemp - radiatorAmbientTemp); // ΔT2_value，确保大于0
    const deltaT1DeltaT2Ratio = Math.abs(deltaT1) / deltaT2; // 使用绝对值避免负数影响
    
    let logMeanTempDiff; // ΔTm_value
    if (deltaT1DeltaT2Ratio > 1.7 && Math.abs(deltaT1 - deltaT2) > 0.001) {
        // 确保分母不为零
        logMeanTempDiff = (deltaT1 - deltaT2) / Math.log(Math.max(0.1, Math.abs(deltaT1) / deltaT2));
    } else {
        logMeanTempDiff = (deltaT1 + deltaT2) / 2;
    }
    
    // 错流对数温差修正系数计算 - 修复复杂公式中的NaN问题
    const R_value = tempDifference / b6; // R_value = 操作温差/b6
    const gMinusH = Math.max(0.1, radiatorCoolantInletTemp - radiatorAmbientTemp); // 确保分母不为零
    const E_value = Math.min(0.99, Math.max(0.01, b6 / gMinusH)); // 限制E_value在0.01-0.99之间
    
    // 分步计算并添加安全检查
    let radiatorLogMeanTempCorrection = 1.0; // 默认值
    try {
        const sqrtR2 = Math.sqrt(R_value*R_value + 1);
        const numerator1 = Math.abs(R_value - 1) > 0.001 ? sqrtR2 / (R_value - 1) : 1.0;
        
        const logArg1 = (1 - E_value) / Math.max(0.01, 1 - R_value * E_value);
        const logTerm1 = Math.log(Math.max(0.01, Math.abs(logArg1)));
        
        const denominatorE = Math.max(0.01, E_value);
        const part1 = 2/denominatorE - 1 - R_value;
        const logArg2Numerator = part1 + sqrtR2;
        const logArg2Denominator = part1 - sqrtR2;
        const logArg2 = Math.max(0.01, Math.abs(logArg2Numerator / Math.max(0.01, Math.abs(logArg2Denominator))));
        const logTerm2 = Math.log(Math.max(0.01, logArg2));
        
        radiatorLogMeanTempCorrection = Math.abs(logTerm2) > 0.001 ? numerator1 * logTerm1 / logTerm2 : 1.0;
        // 限制修正系数在合理范围内
        radiatorLogMeanTempCorrection = Math.min(2.0, Math.max(0.5, radiatorLogMeanTempCorrection));
    } catch (error) {
        console.log('错流对数温差修正系数计算错误:', error);
    }
    
    const safeLogMeanTempDiff = Math.max(0.1, Math.abs(logMeanTempDiff)); // 确保温度差为正值，避免计算错误
    const deltaTm1_value = radiatorLogMeanTempCorrection * safeLogMeanTempDiff; // ΔTm1_value
    // 确保分母不为零
    const requiredHeatDissipationArea = radiatorSystemTotalHeatLoad > 0 ? 
        (radiatorSystemTotalHeatLoad * 1000) / (Math.max(0.1, c6 * deltaTm1_value)) * a6 : 0; // 所需散热面积(m2)
    
    // 获取高度h上的密度_value (使用空气热力计算中的公式)
    const altitude = parseFloat(document.getElementById('altitude').value) || 0;
    const airGasConstant = parseFloat(document.getElementById('airGasConstant').value) || 287.1;
    const pressureAtHeight = 101325 * Math.pow(1 - 2.25577e-5 * altitude, 5.25588); // 在高度h上的压力(Pa)
    const temperatureKAtHeight = 288.15 - 0.0065 * altitude; // 在高度h上的温度(K)
    const densityAtHeight = pressureAtHeight / (airGasConstant * temperatureKAtHeight); // 在高度h上的密度(kg/m3)
    // 确保分母不为零
    const requiredCoolingAirFlow = radiatorSystemTotalHeatLoad > 0 ? 
        (radiatorSystemTotalHeatLoad * 3600) / (Math.max(0.1, b6 * 1.005 * densityAtHeight)) * a6 : 0; // 所需冷却空气流量(m3/h) - 使用空气热力计算中的密度值
    
    // 散热器迎风面积和单风扇风量需求 - 修复可能导致NaN的计算
    const radiatorFrontalArea = 3.14 * f6 * f6 / 4 * d6 / e6 / 1000000; // 散热器迎风面积(m2)
    const singleFanAirFlow = requiredCoolingAirFlow / d6; // 单风扇风量需求(m3/h)
    
    // 中冷器计算 - 按照用户提供的公式修改
    const intercoolerHeatLoad1 = intercoolerHeatLoad; // 中冷器热负荷(kW)
    const pressurizedAirInletTemp = compressorOutletTemp; // 增压空气进口温度(℃) = u
    const pressurizedAirOutletTemp = intercoolerOutletTemp; // 增压空气出口温度(℃) = 中冷器出口温度_value
    // 用户要求：冷却液进口温度 = 操作温度 - 温差
    const intercoolerCoolantInletTemp = operatingTemp - tempDifference; // 冷却液进口温度(℃) = 操作温度-温差
    // 获取中冷器参数输入值a7和b7
    const a7 = Math.max(0.1, coolantTempDiff); // a7 = 中冷器冷却液温度差，确保大于0
    const b7 = Math.max(0.1, intercoolerKa); // b7 = 中冷器Ka值，确保大于0
    // 冷却液出口温度(℃) = 冷却水出口温度_value + a7
    const intercoolerCoolantOutletTemp = radiatorCoolantOutletTemp + a7;
    const pressurizedAirFlow = actualAirFlowNLPM; // 增压空气流量(L/min) = 系统供空气量1_value
    // 冷却液流量(L/min) = 中冷器热负荷_value/a7/冷却液密度_value/冷却液比热_value*1000*60
    const intercoolerCoolantFlow = intercoolerHeatLoad1 > 0 ? 
        (intercoolerHeatLoad1 / a7 / radiatorCoolantDensity / radiatorCoolantSpecificHeat * 1000 * 60) : 0;
    
    // 中冷器对数温差和面积 - 按照用户提供的公式修改
    // ΔT11_value = u - 冷却液出口温度_value
    const deltaT11_value = pressurizedAirInletTemp - intercoolerCoolantOutletTemp;
    // ΔT22_value = 中冷器出口温度_value - 冷却水出口温度_value
    const deltaT22_value = Math.max(0.1, pressurizedAirOutletTemp - radiatorCoolantOutletTemp); // 确保大于0
    // ΔT11ΔT22_value = ΔT11_value/ΔT22_value
    const deltaT11DeltaT22_value = Math.abs(deltaT11_value) / deltaT22_value;
    
    // 对数温差计算
    let deltaTm2_value;
    if (deltaT11DeltaT22_value > 1.7 && Math.abs(deltaT11_value - deltaT22_value) > 0.001) {
        // ΔTm2_value = (ΔT11_value-ΔT22_value)/math.log(ΔT11ΔT22_value)
        deltaTm2_value = (deltaT11_value - deltaT22_value) / Math.log(Math.max(0.1, deltaT11DeltaT22_value));
    } else {
        // ΔTm2_value = (ΔT11_value+ΔT22_value)/2
        deltaTm2_value = (deltaT11_value + deltaT22_value) / 2;
    }
    
    // 错流对数温差修正系数计算 - 按照用户提供的公式
    const R1_value = (pressurizedAirInletTemp - pressurizedAirOutletTemp) / a7;
    const denominatorR1 = Math.max(0.1, pressurizedAirInletTemp - radiatorCoolantOutletTemp); // 确保分母不为零
    const E1_value = Math.min(0.99, Math.max(0.01, a7 / denominatorR1)); // 限制E1_value在0.01-0.99之间
    
    // 分步计算错流对数温差修正系数1_value
    let intercoolerLogMeanTempCorrection = 1.0; // 默认值
    try {
        const sqrtR1 = Math.sqrt(R1_value*R1_value + 1);
        const numerator1 = Math.abs(R1_value - 1) > 0.001 ? sqrtR1 / (R1_value - 1) : 1.0;
        
        const logArg1 = (1 - E1_value) / Math.max(0.01, 1 - R1_value * E1_value);
        const logTerm1 = Math.log(Math.max(0.01, Math.abs(logArg1)));
        
        const denominatorE1 = Math.max(0.01, E1_value);
        const part1 = 2/denominatorE1 - 1 - R1_value;
        const logArg2Numerator = part1 + sqrtR1;
        const logArg2Denominator = part1 - sqrtR1;
        const logArg2 = Math.max(0.01, Math.abs(logArg2Numerator / Math.max(0.01, Math.abs(logArg2Denominator))));
        const logTerm2 = Math.log(Math.max(0.01, logArg2));
        
        intercoolerLogMeanTempCorrection = Math.abs(logTerm2) > 0.001 ? numerator1 * logTerm1 / logTerm2 : 1.0;
        // 限制修正系数在合理范围内
        // 限制修正系数在合理范围内（0.5-2.0）的说明：
        // 1. 修正系数小于0.5意味着传热效率异常低，可能是计算错误
        // 2. 修正系数大于2.0意味着传热效率异常高，不符合实际换热器性能
        // 3. 这个范围基于工程实践经验，确保计算结果的合理性和可靠性
        intercoolerLogMeanTempCorrection = Math.min(2.0, Math.max(0.5, intercoolerLogMeanTempCorrection));
    } catch (error) {
        console.log('中冷器错流对数温差修正系数计算错误:', error);
    }
    
    // ΔTm22_value = 错流对数温差修正系数1_value * ΔTm2_value
    const deltaTm22_value = intercoolerLogMeanTempCorrection * Math.max(0.1, Math.abs(deltaTm2_value)); // 确保温度差为正值
    
    // 所需散热面积1_value = 中冷器热负荷_value*1000/b7/ΔTm22_value
    const intercoolerRequiredArea = intercoolerHeatLoad1 > 0 ? 
        (intercoolerHeatLoad1 * 1000) / (b7 * deltaTm22_value) : 0; // 所需散热面积(m2)
    
    // 更新结果显示
    document.getElementById('radiatorSystemTotalHeatLoad').textContent = radiatorSystemTotalHeatLoad.toFixed(2);
    document.getElementById('radiatorAmbientTemp').textContent = radiatorAmbientTemp.toFixed(1);
    document.getElementById('radiatorOutletAirTemp').textContent = radiatorOutletAirTemp.toFixed(1);
    document.getElementById('radiatorCoolantDensity').textContent = radiatorCoolantDensity.toFixed(0);
    document.getElementById('radiatorCoolantSpecificHeat').textContent = radiatorCoolantSpecificHeat.toFixed(2);
    document.getElementById('radiatorCoolantInletTemp').textContent = radiatorCoolantInletTemp.toFixed(1);
    document.getElementById('radiatorCoolantOutletTemp').textContent = radiatorCoolantOutletTemp.toFixed(1);
    document.getElementById('radiatorCoolantFlow').textContent = radiatorCoolantFlow.toFixed(2);
    document.getElementById('radiatorLogMeanTempCorrection').textContent = radiatorLogMeanTempCorrection.toFixed(2);
    document.getElementById('requiredHeatDissipationArea').textContent = requiredHeatDissipationArea.toFixed(2);
    document.getElementById('radiatorFrontalArea').textContent = radiatorFrontalArea.toFixed(2);
    document.getElementById('requiredCoolingAirFlow').textContent = requiredCoolingAirFlow.toFixed(0);
    document.getElementById('singleFanAirFlow').textContent = singleFanAirFlow.toFixed(0);
    
    document.getElementById('intercoolerHeatLoad1').textContent = intercoolerHeatLoad1.toFixed(2);
    document.getElementById('pressurizedAirInletTemp').textContent = pressurizedAirInletTemp.toFixed(1);
    document.getElementById('pressurizedAirOutletTemp').textContent = pressurizedAirOutletTemp.toFixed(1);
    document.getElementById('intercoolerCoolantInletTemp').textContent = intercoolerCoolantInletTemp.toFixed(1);
    document.getElementById('intercoolerCoolantOutletTemp').textContent = intercoolerCoolantOutletTemp.toFixed(1);
    document.getElementById('pressurizedAirFlow').textContent = pressurizedAirFlow.toFixed(2);
    document.getElementById('intercoolerCoolantFlow').textContent = intercoolerCoolantFlow.toFixed(2);
    document.getElementById('intercoolerLogMeanTempCorrection').textContent = intercoolerLogMeanTempCorrection.toFixed(2);
    document.getElementById('intercoolerRequiredArea').textContent = intercoolerRequiredArea.toFixed(2);
}

// 第七页：燃料电池混合动力系统计算
function calculateHybridSystem() {
    // 获取输入值
    const vehicleMass = parseFloat(document.getElementById('vehicleMass').value) || 0;
    const range = parseFloat(document.getElementById('range').value) || 0;
    const rollingResistance = parseFloat(document.getElementById('rollingResistance').value) || 0;
    const dragCoefficient = parseFloat(document.getElementById('dragCoefficient').value) || 0;
    const maxSpeed = parseFloat(document.getElementById('maxSpeed').value) || 0;
    const maxGradeability = parseFloat(document.getElementById('maxGradeability').value) || 0;
    const gradeabilitySpeed = parseFloat(document.getElementById('gradeabilitySpeed').value) || 0;
    const accelerationEndSpeed = parseFloat(document.getElementById('accelerationEndSpeed').value) || 0;
    const accelerationTime = parseFloat(document.getElementById('accelerationTime').value) || 0;
    const frontalArea = parseFloat(document.getElementById('frontalArea').value) || 0;
    const powertrainEfficiency = parseFloat(document.getElementById('powertrainEfficiency').value) || 0;
    const rotatingMassCoefficient = parseFloat(document.getElementById('rotatingMassCoefficient').value) || 0;
    const finalDriveRatio = parseFloat(document.getElementById('finalDriveRatio').value) || 0;
    const lowGearRatio = parseFloat(document.getElementById('lowGearRatio').value) || 0;
    const highGearRatio = parseFloat(document.getElementById('highGearRatio').value) || 0;
    const tireRadius = parseFloat(document.getElementById('tireRadius').value) || 0;
    const accessoryPower = parseFloat(document.getElementById('accessoryPower').value) || 0;
    const motorEfficiency = parseFloat(document.getElementById('motorEfficiency').value) || 0;
    const batteryEfficiency = parseFloat(document.getElementById('batteryEfficiency').value) || 0;
    const hydrogenBottlePressure = parseFloat(document.getElementById('hydrogenBottlePressure').value) || 0;
    const hydrogenBottleVolume = parseFloat(document.getElementById('hydrogenBottleVolume').value) || 0;
    
    // 从第一页获取燃料电池功率
    const stackPower = parseFloat(document.getElementById('stackPower').textContent) || 0;
    
    // 确保关键参数不为零
    const safePowertrainEfficiency = Math.max(0.1, powertrainEfficiency);
    const safeMotorEfficiency = Math.max(0.1, motorEfficiency);
    const safeBatteryEfficiency = Math.max(0.1, batteryEfficiency);
    const safeTireRadius = Math.max(0.1, tireRadius);
    
    // 最大爬坡角计算 - 按照用户公式
    const maxClimbingAngle = Math.atan(maxGradeability / 100) * 180 / Math.PI; // 最大爬坡角(θ)
    
    // 加速度计算 - 按照用户公式 (h8/i8/3.6*1000)
    const acceleration = accelerationEndSpeed / accelerationTime / 3.6 * 1000; // 加速阶段加速度(m/s2)
    
    // 最高车速功率计算 (Pmax1) - 按照用户公式 (e8/3600/k8*(a8*9.8*c8+d8*j8*e8**2/21.15))
    const maxSpeedPower = (maxSpeed / 3600 / safePowertrainEfficiency) * 
                          (vehicleMass * 9.8 * rollingResistance + dragCoefficient * frontalArea * maxSpeed**2 / 21.15); // 最高车速功率(kW)
    
    // 最大爬坡功率计算 (Pmax2) - 按照用户公式
    const maxGradeabilityPower = (gradeabilitySpeed / 3600 / safePowertrainEfficiency) * 
                                (vehicleMass * 9.8 * rollingResistance * Math.cos(maxClimbingAngle * Math.PI / 180) + 
                                 vehicleMass * 9.8 * Math.sin(maxClimbingAngle * Math.PI / 180) + 
                                 dragCoefficient * frontalArea * gradeabilitySpeed**2 / 21.15); // 最大爬坡功率(kW)
    
    // 最大加速功率计算 (Pmax3) - 按照用户公式
    const maxAccelerationPower = (accelerationEndSpeed / 3600 / safePowertrainEfficiency) * 
                                 (vehicleMass * 9.8 * rollingResistance + 
                                  dragCoefficient * frontalArea * accelerationEndSpeed**2 / 21.15 + 
                                  rotatingMassCoefficient * vehicleMass * (accelerationEndSpeed / accelerationTime / 3.6)); // 最大加速功率(kW)
    
    // 电机峰值功率 - 按照用户公式 (取最大值)
    const motorPeakPower = Math.max(maxSpeedPower, maxGradeabilityPower, maxAccelerationPower); // 电机峰值功率(kW)
    
    // 电机额定功率 - 按照用户公式 (等于Pmax1)
    const motorRatedPower = maxSpeedPower; // 电机额定功率(kW)
    
    // 电机转速计算 - 按照用户公式 (e8*m8*n8/0.3768/p8)
    const motorPeakRPM = (maxSpeed * finalDriveRatio * highGearRatio) / (0.3768 * safeTireRadius); // 电机峰值转速(r/min)
    const motorRatedRPM = (maxSpeed * finalDriveRatio * lowGearRatio) / (0.3768 * safeTireRadius); // 电机额定转速(r/min)
    
    // 燃料电池所需功率 - 按照用户公式 (电机额定功率_value + q8)
    const fuelCellRequiredPower = motorRatedPower + accessoryPower; // 燃料电池所需功率(kW)
    
    // 动力电池所需功率 - 按照用户公式 ((电机峰值功率_value/r8-燃料电池所需功率_value)/s8)
    const batteryRequiredPower = (motorPeakPower / safeMotorEfficiency - fuelCellRequiredPower) / safeBatteryEfficiency; // 动力电池所需功率(kW)
    
    // 额定工况氢耗 - 按照用户公式 (燃料电池所需功率_value*1000/0.62/96485)
    const ratedConditionHydrogenConsumption = fuelCellRequiredPower * 1000 / 0.62 / 96485; // 额定工况氢耗(g/s)
    
    // PEM所需氢气质量 - 按照用户公式 (b8/e8*3600*额定工况氢耗_value/1000)
    const requiredHydrogenMass = range / maxSpeed * 3600 * ratedConditionHydrogenConsumption / 1000; // 所需氢气质量(Kg)
    
    // 单瓶存储氢气质量 - 按照用户公式 (t8*1000*u8/8.314/298*2.016/1000)
    const singleBottleHydrogenMass = hydrogenBottlePressure * 1000 * hydrogenBottleVolume / 8.314 / 298 * 2.016 / 1000; // 单瓶存储氢气质量(Kg)
    
    // 所需氢瓶数量 - 按照用户公式 (PEM所需氢气质量_value/单瓶存储氢气质量_value)
    // 确保单瓶氢气质量不为零，避免除零错误
    const safeSingleBottleHydrogenMass = Math.max(0.1, singleBottleHydrogenMass);
    const requiredBottleCount = requiredHydrogenMass / safeSingleBottleHydrogenMass; // 所需氢瓶数量(n)
    
    // 更新结果显示
    document.getElementById('maxClimbingAngle').textContent = maxClimbingAngle.toFixed(2);
    document.getElementById('acceleration').textContent = acceleration.toFixed(3);
    document.getElementById('maxSpeedPower').textContent = maxSpeedPower.toFixed(2);
    document.getElementById('maxGradeabilityPower').textContent = maxGradeabilityPower.toFixed(2);
    document.getElementById('maxAccelerationPower').textContent = maxAccelerationPower.toFixed(2);
    document.getElementById('motorPeakPower').textContent = motorPeakPower.toFixed(2);
    document.getElementById('motorRatedPower').textContent = motorRatedPower.toFixed(2);
    // 交换电机峰值转速和额定转速的显示位置
      document.getElementById('motorPeakRPM').textContent = motorRatedRPM.toFixed(0);
      document.getElementById('motorRatedRPM').textContent = motorPeakRPM.toFixed(0);
    document.getElementById('fuelCellRequiredPower').textContent = fuelCellRequiredPower.toFixed(2);
    document.getElementById('ratedConditionHydrogenConsumption').textContent = ratedConditionHydrogenConsumption.toFixed(4);
    document.getElementById('requiredHydrogenMass').textContent = requiredHydrogenMass.toFixed(3); // 质量单位保留3位小数
    document.getElementById('singleBottleHydrogenMass').textContent = singleBottleHydrogenMass.toFixed(3); // 质量单位保留3位小数
    document.getElementById('requiredBottleCount').textContent = requiredBottleCount.toFixed(2); // 氢瓶数量保留2位小数
    document.getElementById('batteryRequiredPower').textContent = batteryRequiredPower.toFixed(2);
}

// 实用小工具 - 求和功能
function calculateSum() {
    const sumInput = document.getElementById('sumInput').value;
    const numbers = sumInput.split(/[\n,]+/).map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    document.getElementById('sumResult').textContent = sum.toFixed(2);
}

// 清除求和输入
function clearSum() {
    document.getElementById('sumInput').value = '';
    document.getElementById('sumResult').textContent = '0';
}

// 实用小工具 - 流速转换
function calculateFlowVelocity() {
    const flowRateSLPM = parseFloat(document.getElementById('flowRateSLPM').value) || 0;
    const pipeDiameter = parseFloat(document.getElementById('pipeDiameter').value) || 0;
    
    if (pipeDiameter === 0) {
        document.getElementById('velocityResult').textContent = '0 m/s';
        document.getElementById('areaResult').textContent = '0 m²';
        return;
    }
    
    // 将流量从SLPM转换为m³/s
    const flowRateM3s = flowRateSLPM / 60000; // 1 SLPM = 1/60000 m³/s
    
    // 将直径从mm转换为m
    const diameterM = pipeDiameter / 1000; // 1 mm = 0.001 m
    
    // 计算截面积
    const areaM2 = Math.PI * Math.pow(diameterM / 2, 2); // 截面积（m²）
    const areaMm2 = areaM2 * 1000000; // 截面积（mm²）
    
    // 计算流速（m/s）
    const velocity = flowRateM3s / areaM2; // 流速 = 流量 / 截面积
    
    // 更新结果
    document.getElementById('velocityResult').textContent = velocity.toFixed(3) + ' m/s';
    document.getElementById('areaResult').textContent = areaMm2.toFixed(2) + ' mm²';
}

// 数据导出功能
function exportData() {
    // 收集第一页的输入数据
    const systemDesignData = {
        cellVoltage: parseFloat(document.getElementById('cellVoltage').value) || 0,
        cellCount: parseInt(document.getElementById('cellCount').value) || 0,
        reactionArea: parseFloat(document.getElementById('reactionArea').value) || 0,
        currentDensity: parseFloat(document.getElementById('currentDensity').value) || 0,
        airRatio: parseFloat(document.getElementById('airRatio').value) || 0,
        hydrogenRatio: parseFloat(document.getElementById('hydrogenRatio').value) || 0,
        operatingTemp: parseFloat(document.getElementById('operatingTemp').value) || 0,
        ambientTemp: parseFloat(document.getElementById('ambientTemp').value) || 0,
        tempDifference: parseFloat(document.getElementById('tempDifference').value) || 0,
        humidity: parseFloat(document.getElementById('humidity').value) || 0,
        hydrogenUtilization: parseFloat(document.getElementById('hydrogenUtilization').value) || 0,
        anodeInletPressure: parseFloat(document.getElementById('anodeInletPressure').value) || 0,
        cathodeInletPressure: parseFloat(document.getElementById('cathodeInletPressure').value) || 0,
        anodePressureLoss: parseFloat(document.getElementById('anodePressureLoss').value) || 0,
        cathodePressureLoss: parseFloat(document.getElementById('cathodePressureLoss').value) || 0,
        coolingPressureLoss: parseFloat(document.getElementById('coolingPressureLoss').value) || 0,
        waterDistribution: parseFloat(document.getElementById('waterDistribution').value) || 0,
        anodeInletTemp: parseFloat(document.getElementById('anodeInletTemp').value) || 0,
        gasSeparatorEfficiency: parseFloat(document.getElementById('gasSeparatorEfficiency').value) || 0,
        intercoolerPressureLoss: parseFloat(document.getElementById('intercoolerPressureLoss').value) || 0,
        compressorOutletTemp: parseFloat(document.getElementById('compressorOutletTemp').value) || 0,
        glycolPercentage: parseFloat(document.getElementById('glycolPercentage').value) || 0,
        humidifierEfficiency: parseFloat(document.getElementById('humidifierEfficiency').value) || 0,
        humidifierDryLoss: parseFloat(document.getElementById('humidifierDryLoss').value) || 0,
        humidifierWetLoss: parseFloat(document.getElementById('humidifierWetLoss').value) || 0
    };
    
    // 转换为JSON字符串
    const jsonData = JSON.stringify(systemDesignData, null, 2);
    
    // 创建Blob对象
    const blob = new Blob([jsonData], { type: 'application/json' });
    
    // 创建下载链接
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fuel_cell_calculator_data.json';
    a.click();
    
    // 释放URL对象
    URL.revokeObjectURL(url);
}

// 数据导入功能
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            // 导入数据到第一页输入字段
            document.getElementById('cellVoltage').value = data.cellVoltage || '';
            document.getElementById('cellCount').value = data.cellCount || '';
            document.getElementById('reactionArea').value = data.reactionArea || '';
            document.getElementById('currentDensity').value = data.currentDensity || '';
            document.getElementById('airRatio').value = data.airRatio || '';
            document.getElementById('hydrogenRatio').value = data.hydrogenRatio || '';
            document.getElementById('operatingTemp').value = data.operatingTemp || '';
            document.getElementById('ambientTemp').value = data.ambientTemp || '';
            document.getElementById('tempDifference').value = data.tempDifference || '';
            document.getElementById('humidity').value = data.humidity || '';
            document.getElementById('hydrogenUtilization').value = data.hydrogenUtilization || '';
            document.getElementById('anodeInletPressure').value = data.anodeInletPressure || '';
            document.getElementById('cathodeInletPressure').value = data.cathodeInletPressure || '';
            document.getElementById('anodePressureLoss').value = data.anodePressureLoss || '';
            document.getElementById('cathodePressureLoss').value = data.cathodePressureLoss || '';
            document.getElementById('coolingPressureLoss').value = data.coolingPressureLoss || '';
            document.getElementById('waterDistribution').value = data.waterDistribution || '';
            document.getElementById('anodeInletTemp').value = data.anodeInletTemp || '';
            document.getElementById('gasSeparatorEfficiency').value = data.gasSeparatorEfficiency || '';
            document.getElementById('intercoolerPressureLoss').value = data.intercoolerPressureLoss || '';
            document.getElementById('compressorOutletTemp').value = data.compressorOutletTemp || '';
            document.getElementById('glycolPercentage').value = data.glycolPercentage || '';
            document.getElementById('humidifierEfficiency').value = data.humidifierEfficiency || '';
            document.getElementById('humidifierDryLoss').value = data.humidifierDryLoss || '';
            document.getElementById('humidifierWetLoss').value = data.humidifierWetLoss || '';
            
            // 重新计算所有结果
            calculatePowerEfficiency();
            calculateAirThermal();
            calculateValveFlow();
            calculatePipelinePressure();
            calculateHeatExchanger();
            calculateHybridSystem();
            
            // 显示成功提示（这里简化处理，实际应用中可以添加更友好的提示）
            alert('数据导入成功！');
        } catch (error) {
            alert('数据导入失败：' + error.message);
        }
    };
    reader.readAsText(file);
    
    // 重置文件输入，以便可以重复选择同一个文件
    event.target.value = '';
}

// 动态性能页面功能实现
window.addEventListener('DOMContentLoaded', function() {
    // 初始化图表
    const ctx = document.getElementById('performanceChart');
    let performanceChart = null;
    let parsedData = { currentDensity: [], voltage: [], current: [], power: [] };
    
    // 从第一页获取参数并计算性能数据
    const calculatePerformanceData = () => {
        // 从第一页获取参数
        const cellCount = parseInt(document.getElementById('cellCount').value) || 100;
        const reactionArea = parseFloat(document.getElementById('reactionArea').value) || 100;
        const cellVoltage = parseFloat(document.getElementById('cellVoltage').value) || 0.85;
        const currentDensity = parseFloat(document.getElementById('currentDensity').value) || 0.8; // 作为参考值
        
        // 从相关输入中获取新参数的默认值
        const hydrogenRatio = parseFloat(document.getElementById('hydrogenRatio')?.value) || 1.2;
        const airRatio = parseFloat(document.getElementById('airRatio')?.value) || 2.0;
        const anodePressure = parseFloat(document.getElementById('anodeInletPressure')?.value) || 150;
        const cathodePressure = parseFloat(document.getElementById('cathodeInletPressure')?.value) || 150;
        const temperatureDiff = parseFloat(document.getElementById('temperatureDifference')?.value) || 5;
        
        const data = {
            currentDensity: [], 
            voltage: [], 
            current: [], 
            power: [],
            hydrogenRatio: [],
            airRatio: [],
            anodePressure: [],
            cathodePressure: [],
            temperatureDiff: [],
            heatLoad: [], // 系统总热负荷 (kW)
            coolantFlow: [] // 电堆冷却液流量 (L/min)
        };
        
        // 计算不同电流密度下的数据，范围从0到2.0 A/cm²，步长0.05
        for (let i = 0; i <= 40; i++) {
            const density = i * 0.05;
            
            // 基于简化的燃料电池极化曲线模型计算节电压
            // 这里使用一个更准确的极化曲线模型，考虑活化极化、欧姆极化和浓差极化
            const activationLoss = 0.05 * Math.log10(density + 0.01);
            const ohmicLoss = 0.15 * density;
            const concentrationLoss = 0.05 * (Math.exp(density) - 1) / 100;
            
            // 基础电压使用第一页的设定值，并根据电流密度进行修正
            const voltage = Math.max(0.1, cellVoltage - activationLoss - ohmicLoss - concentrationLoss);
            
            // 计算电堆电流和功率
            const stackCurrent = reactionArea * density; // 电堆电流(A)
            const stackPower = stackCurrent * voltage * cellCount / 1000; // 电堆功率(kW)
            
            // 计算系统总热负荷 (kW) - 假设电堆效率约为50%，热负荷约等于功率
            const heatLoad = stackPower; // 简化计算，实际应根据反应焓变和效率计算
            
            // 计算电堆冷却液流量 (L/min) - 假设冷却液温升为10℃，水的比热容为4.186 kJ/(kg·℃)，密度为1 kg/L
            const coolantFlowRate = (heatLoad * 60) / (4.186 * 10) / 1; // L/min
            
            data.currentDensity.push(density.toFixed(2));
            data.voltage.push(voltage.toFixed(3));
            data.current.push(stackCurrent.toFixed(2));
            data.power.push(stackPower.toFixed(2));
            data.hydrogenRatio.push(hydrogenRatio);
            data.airRatio.push(airRatio);
            data.anodePressure.push(anodePressure);
            data.cathodePressure.push(cathodePressure);
            data.temperatureDiff.push(temperatureDiff);
            data.heatLoad.push(heatLoad.toFixed(2));
            data.coolantFlow.push(coolantFlowRate.toFixed(2));
        }
        
        return data;
    };
    
    // 创建示例数据（用于初始展示）
    const createSampleData = () => {
        const sampleData = {
            currentDensity: [], 
            voltage: [], 
            current: [], 
            power: [],
            hydrogenRatio: [],
            airRatio: [],
            anodePressure: [],
            cathodePressure: [],
            temperatureDiff: [],
            heatLoad: [], // 系统总热负荷 (kW)
            coolantFlow: [] // 电堆冷却液流量 (L/min)
        };
        
        for (let i = 0; i <= 40; i++) {
            const density = i * 0.05;
            // 简单的燃料电池极化曲线模型
            const voltage = 0.9 - 0.05 * Math.log10(density + 0.01) - 0.2 * density;
            // 示例参数
            const reactionArea = 100; // cm²
            const cellCount = 100; // 节数
            
            // 示例参数值
            const hydrogenRatio = 1.2; // 默认氢气计量比
            const airRatio = 2.0; // 默认空气计量比
            const anodePressure = 150; // 默认阳极压力 (kPa)
            const cathodePressure = 150; // 默认阴极压力 (kPa)
            const temperatureDiff = 5; // 默认操作温差 (℃)
            
            // 计算电堆电流和功率
            const stackCurrent = reactionArea * density; // 电堆电流(A)
            const stackPower = stackCurrent * Math.max(0.1, voltage) * cellCount / 1000; // 电堆功率(kW)
            
            // 计算系统总热负荷 (kW) - 假设电堆效率约为50%，热负荷约等于功率
            const heatLoad = stackPower; // 简化计算
            
            // 计算电堆冷却液流量 (L/min) - 假设冷却液温升为10℃
            const coolantFlowRate = (heatLoad * 60) / (4.186 * 10) / 1; // L/min
            
            sampleData.currentDensity.push(density.toFixed(2));
            sampleData.voltage.push(Math.max(0.1, voltage).toFixed(3));
            sampleData.current.push(stackCurrent.toFixed(2));
            sampleData.power.push(stackPower.toFixed(2));
            sampleData.hydrogenRatio.push(hydrogenRatio);
            sampleData.airRatio.push(airRatio);
            sampleData.anodePressure.push(anodePressure);
            sampleData.cathodePressure.push(cathodePressure);
            sampleData.temperatureDiff.push(temperatureDiff);
            sampleData.heatLoad.push(heatLoad.toFixed(2));
            sampleData.coolantFlow.push(coolantFlowRate.toFixed(2));
        }
        return sampleData;
    };
    
    // 绘制图表
    const drawChart = (data) => {
        // 如果图表已存在，销毁它
        if (performanceChart) {
            performanceChart.destroy();
        }
        
        // 创建新图表
        performanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.currentDensity,
                datasets: [{
                    label: '电流密度-节电压关系 (V)',
                    data: data.voltage,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true,
                    yAxisID: 'y'
                },
                {
                    label: '电流密度-电堆电流关系 (A)',
                    data: data.current,
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false,
                    yAxisID: 'y2'
                },
                {
                    label: '电流密度-电堆功率关系 (kW)',
                    data: data.power,
                    borderColor: '#2ecc71',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true,
                    yAxisID: 'y1'
                },
                {
                    label: '电流密度-系统总热负荷关系 (kW)',
                    data: data.heatLoad,
                    borderColor: '#f39c12',
                    backgroundColor: 'rgba(243, 156, 18, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false,
                    yAxisID: 'y3'
                },
                {
                    label: '电流密度-电堆冷却液流量关系 (L/min)',
                    data: data.coolantFlow,
                    borderColor: '#9b59b6',
                    backgroundColor: 'rgba(155, 89, 182, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false,
                    yAxisID: 'y4'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '燃料电池动态性能曲线',
                        font: {
                            size: 16
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y;
                                }
                                return label;
                            },
                            footer: function(tooltipItems) {
                                const index = tooltipItems[0].dataIndex;
                                return [
                                    `电堆电流: ${data.current[index]} A`,
                                    `电堆节数: ${parseInt(document.getElementById('cellCount').value) || 100}`,
                                    `反应面积: ${parseFloat(document.getElementById('reactionArea').value) || 100} cm²`
                                ];
                            }
                        }
                    },
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '电流密度 (A/cm²)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: '节电压 (V)'
                        },
                        suggestedMin: 0,
                        suggestedMax: 1
                    },
                    y1: {
                        title: {
                            display: true,
                            text: '电堆功率 (kW)'
                        },
                        position: 'right',
                        suggestedMin: 0,
                        suggestedMax: 150,
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    y2: {
                        title: {
                            display: true,
                            text: '电堆电流 (A)'
                        },
                        position: 'right',
                        suggestedMin: 0,
                        suggestedMax: 200,
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    y3: {
                        title: {
                            display: true,
                            text: '系统总热负荷 (kW)'
                        },
                        position: 'right',
                        suggestedMin: 0,
                        suggestedMax: 150,
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    y4: {
                        title: {
                            display: true,
                            text: '电堆冷却液流量 (L/min)'
                        },
                        position: 'right',
                        suggestedMin: 0,
                        suggestedMax: 200,
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
    };
    
    // 解析粘贴的数据
        const parsePastedData = (text) => {
            const lines = text.trim().split('\n');
            const data = { 
                currentDensity: [], 
                voltage: [], 
                current: [], 
                power: [],
                hydrogenRatio: [],
                airRatio: [],
                anodePressure: [],
                cathodePressure: [],
                temperatureDiff: [],
                heatLoad: [], // 系统总热负荷 (kW)
                coolantFlow: [] // 电堆冷却液流量 (L/min)
            };
            
            // 从第一页获取参数用于计算
            const cellCount = parseInt(document.getElementById('cellCount').value) || 100;
            const reactionArea = parseFloat(document.getElementById('reactionArea').value) || 100;
            
            lines.forEach(line => {
                // 使用制表符或空格分割数据
                const parts = line.trim().split(/[\t\s]+/);
                if (parts.length >= 2) {
                    const density = parseFloat(parts[0]);
                    const voltage = parseFloat(parts[1]);
                    const hydrogenRatio = parts.length >= 3 ? parseFloat(parts[2]) : 1.2; // 默认氢气计量比1.2
                    const airRatio = parts.length >= 4 ? parseFloat(parts[3]) : 2.0; // 默认空气计量比2.0
                    const anodePressure = parts.length >= 5 ? parseFloat(parts[4]) : 150; // 默认阳极压力150 kPa
                    const cathodePressure = parts.length >= 6 ? parseFloat(parts[5]) : 150; // 默认阴极压力150 kPa
                    const temperatureDiff = parts.length >= 7 ? parseFloat(parts[6]) : 5; // 默认温差5℃
                    
                    if (!isNaN(density) && !isNaN(voltage)) {
                        // 计算电堆电流和功率
                        const stackCurrent = reactionArea * density;
                        const stackPower = stackCurrent * voltage * cellCount / 1000;
                        
                        // 计算系统总热负荷 (kW) - 假设电堆效率约为50%，热负荷约等于功率
                        const heatLoad = stackPower; // 简化计算
                        
                        // 计算电堆冷却液流量 (L/min) - 假设冷却液温升为10℃
                        const coolantFlowRate = (heatLoad * 60) / (4.186 * 10) / 1; // L/min
                        
                        data.currentDensity.push(density);
                        data.voltage.push(voltage);
                        data.current.push(stackCurrent);
                        data.power.push(stackPower);
                        data.hydrogenRatio.push(hydrogenRatio);
                        data.airRatio.push(airRatio);
                        data.anodePressure.push(anodePressure);
                        data.cathodePressure.push(cathodePressure);
                        data.temperatureDiff.push(temperatureDiff);
                        data.heatLoad.push(heatLoad);
                        data.coolantFlow.push(coolantFlowRate);
                    }
                }
            });
            
            // 按照电流密度排序
            if (data.currentDensity.length > 1) {
                const sortedIndices = [...Array(data.currentDensity.length).keys()]
                    .sort((a, b) => data.currentDensity[a] - data.currentDensity[b]);
                
                data.currentDensity = sortedIndices.map(i => data.currentDensity[i]);
                data.voltage = sortedIndices.map(i => data.voltage[i]);
                data.current = sortedIndices.map(i => data.current[i]);
                data.power = sortedIndices.map(i => data.power[i]);
                data.hydrogenRatio = sortedIndices.map(i => data.hydrogenRatio[i]);
                data.airRatio = sortedIndices.map(i => data.airRatio[i]);
                data.anodePressure = sortedIndices.map(i => data.anodePressure[i]);
                data.cathodePressure = sortedIndices.map(i => data.cathodePressure[i]);
                data.temperatureDiff = sortedIndices.map(i => data.temperatureDiff[i]);
                data.heatLoad = sortedIndices.map(i => data.heatLoad[i]);
                data.coolantFlow = sortedIndices.map(i => data.coolantFlow[i]);
            }
            
            return data;
        };
        
    // 处理数据按钮点击事件
    const processDataButton = document.getElementById('processDataButton');
    const clearDataButton = document.getElementById('clearDataButton');
    const dataPasteArea = document.getElementById('dataPasteArea');
    const dataSlider = document.getElementById('dataSlider');
    const sliderValueDisplay = document.getElementById('sliderValueDisplay');
    
    if (processDataButton && dataPasteArea && dataSlider && sliderValueDisplay) {
        // 初始化时使用示例数据
        const sampleData = createSampleData();
        parsedData = sampleData;
        drawChart(sampleData);
        
        // 设置滑块的最大值
        dataSlider.max = parsedData.currentDensity.length - 1;
        
        // 处理数据按钮点击
        processDataButton.addEventListener('click', function() {
            const pastedText = dataPasteArea.value.trim();
            if (pastedText) {
                const newData = parsePastedData(pastedText);
                if (newData.currentDensity.length > 0) {
                    parsedData = newData;
                    drawChart(newData);
                    dataSlider.max = newData.currentDensity.length - 1;
                    dataSlider.value = 0;
                    updateSliderDisplay(0);
                } else {
                    alert('未识别到有效数据，请检查粘贴格式。每行应该包含电流密度和节电压，用制表符或空格分隔。');
                }
            } else {
                // 如果没有粘贴数据，则根据第一页参数计算
                const calculatedData = calculatePerformanceData();
                parsedData = calculatedData;
                drawChart(calculatedData);
                dataSlider.max = calculatedData.currentDensity.length - 1;
                dataSlider.value = 0;
                updateSliderDisplay(0);
            }
        });
        
        // 清空数据按钮点击事件
        clearDataButton.addEventListener('click', function() {
            // 清空数据粘贴区域
            dataPasteArea.value = '';
            
            // 使用示例数据重置图表
            const sampleData = createSampleData();
            parsedData = sampleData;
            drawChart(sampleData);
            
            // 重置滑块
            dataSlider.max = parsedData.currentDensity.length - 1;
            dataSlider.value = 0;
            updateSliderDisplay(0);
        });
        
        // 滑块移动事件
        dataSlider.addEventListener('input', function() {
            const index = parseInt(this.value);
            updateSliderDisplay(index);
        });
        
        // 更新滑块显示
            function updateSliderDisplay(index) {
                if (parsedData.currentDensity[index] !== undefined && parsedData.voltage[index] !== undefined && parsedData.current[index] !== undefined && parsedData.power[index] !== undefined && parsedData.heatLoad[index] !== undefined && parsedData.coolantFlow[index] !== undefined) {
                    sliderValueDisplay.textContent = `电流密度: ${parsedData.currentDensity[index]} A/cm², 节电压: ${parsedData.voltage[index]} V, 电堆电流: ${parsedData.current[index]} A, 电堆功率: ${parsedData.power[index]} kW, 系统总热负荷: ${parsedData.heatLoad[index]} kW, 电堆冷却液流量: ${parsedData.coolantFlow[index]} L/min, 氢气计量比: ${parsedData.hydrogenRatio[index]}, 空气计量比: ${parsedData.airRatio[index]}, 阳极入压力: ${parsedData.anodePressure[index]} kPa, 阴极入压力: ${parsedData.cathodePressure[index]} kPa, 操作温差: ${parsedData.temperatureDiff[index]} ℃`;
                    
                    // 如果图表存在，高亮当前点
                    if (performanceChart) {
                    // 高亮电压曲线的当前点
                    performanceChart.data.datasets[0].pointBackgroundColor = Array(parsedData.currentDensity.length).fill('rgba(52, 152, 219, 0.2)');
                    performanceChart.data.datasets[0].pointBorderColor = Array(parsedData.currentDensity.length).fill('#3498db');
                    performanceChart.data.datasets[0].pointRadius = Array(parsedData.currentDensity.length).fill(3);
                    
                    // 高亮功率曲线的当前点
                    performanceChart.data.datasets[1].pointBackgroundColor = Array(parsedData.currentDensity.length).fill('rgba(46, 204, 113, 0.2)');
                    performanceChart.data.datasets[1].pointBorderColor = Array(parsedData.currentDensity.length).fill('#2ecc71');
                    performanceChart.data.datasets[1].pointRadius = Array(parsedData.currentDensity.length).fill(3);
                    
                    // 高亮热负荷曲线的当前点
                    performanceChart.data.datasets[3].pointBackgroundColor = Array(parsedData.currentDensity.length).fill('rgba(243, 156, 18, 0.2)');
                    performanceChart.data.datasets[3].pointBorderColor = Array(parsedData.currentDensity.length).fill('#f39c12');
                    performanceChart.data.datasets[3].pointRadius = Array(parsedData.currentDensity.length).fill(3);
                    
                    // 高亮冷却液流量曲线的当前点
                    performanceChart.data.datasets[4].pointBackgroundColor = Array(parsedData.currentDensity.length).fill('rgba(155, 89, 182, 0.2)');
                    performanceChart.data.datasets[4].pointBorderColor = Array(parsedData.currentDensity.length).fill('#9b59b6');
                    performanceChart.data.datasets[4].pointRadius = Array(parsedData.currentDensity.length).fill(3);
                    
                    // 高亮当前点
                    performanceChart.data.datasets[0].pointBackgroundColor[index] = 'rgba(231, 76, 60, 0.8)';
                    performanceChart.data.datasets[0].pointBorderColor[index] = '#e74c3c';
                    performanceChart.data.datasets[0].pointRadius[index] = 6;
                    
                    performanceChart.data.datasets[1].pointBackgroundColor[index] = 'rgba(231, 76, 60, 0.8)';
                    performanceChart.data.datasets[1].pointBorderColor[index] = '#e74c3c';
                    performanceChart.data.datasets[1].pointRadius[index] = 6;
                    
                    // 高亮当前点的热负荷和冷却液流量
                    performanceChart.data.datasets[3].pointBackgroundColor[index] = 'rgba(231, 76, 60, 0.8)';
                    performanceChart.data.datasets[3].pointBorderColor[index] = '#e74c3c';
                    performanceChart.data.datasets[3].pointRadius[index] = 6;
                    
                    performanceChart.data.datasets[4].pointBackgroundColor[index] = 'rgba(231, 76, 60, 0.8)';
                    performanceChart.data.datasets[4].pointBorderColor[index] = '#e74c3c';
                    performanceChart.data.datasets[4].pointRadius[index] = 6;
                    
                    performanceChart.update();
                }
            }
        }
    }
});