// 多语言文本资源
const translations = {
    'zh-CN': {
        // 页面标题和导航
        pageTitle: 'Fuel Cell 计算器 V2.21',
        tabSystemDesign: '系统设计计算',
        tabAirThermal: '空气热力计算',
        tabHydrogenValue: '氢气热值与度电数',
        tabValveFlow: '阀门流体计算',
        tabPipelinePressure: '管路压损计算',
        tabHeatExchanger: '换热器/中冷器计算',
        tabHybridSystem: '燃料电池混合动力系统计算',
        tabDynamicPerformance: '动态性能（beta）',
        tabTools: '实用小工具',
        
        // 按钮文本
        btnExport: '导出输入',
        btnImport: '导入输入',
        btnDownload: '下载离线版',
        btnLogin: '登录',
        btnLogout: '退出登录',
        btnViewProfile: '查看资料',
        btnGithub: '查看源代码',
        btnVersionLog: '查看版本更新日志',
        btnCalculate: '计算',
        btnClear: '清除',
        btnSum: '求和',
        
        // 语言选择器
        languageSwitch: '切换语言',
        currentLanguage: '简体中文',
        
        // 系统设计计算页面
        stackDesignTitle: '电堆基础设计参数',
        
        // 输入标签
        cellVoltage: '节电压(V)',
        cellCount: '电堆节数',
        reactionArea: '反应面积(cm2)',
        currentDensity: '电流密度(A/cm2)',
        airRatio: '空气计量比',
        hydrogenRatio: '氢气计量比',
        operatingTemp: '操作温度(℃)',
        ambientTemp: '环境温度(℃)',
        tempDifference: '操作温差(℃)',
        humidity: '环境湿度(%)',
        hydrogenUtilization: '氢气利用率(%)',
        anodeInletPressure: '阳极入压力(kPa)',
        cathodeInletPressure: '阴极入压力(kPa)',
        anodePressureLoss: '阳极压损(kPa)',
        cathodePressureLoss: '阴极压损(kPa)',
        coolingPressureLoss: '冷却腔压损(kPa)',
        waterDistribution: '阳极水分布系数',
        anodeInletTemp: '阳极入温度(℃)',
        gasSeparatorEfficiency: '气分效率(%)',
        intercoolerPressureLoss: '中冷器压损(kPa)',
        compressorOutletTemp: '空压机出温度(℃)',
        glycolPercentage: '乙二醇占比(%)',
        humidifierEfficiency: '加湿器效率(%)',
        humidifierDryLoss: '加湿器干侧压损(kPa)',
        humidifierWetLoss: '加湿器湿侧压损(kPa)',
        
        // 结果标签
        resultStackCalc: '电堆计算',
        resultHydrogenSystem: '氢气子系统',
        resultAirSystem: '空气子系统',
        resultHeatSystem: '换热子系统',
        
        stackCurrent: '电堆电流(A)',
        stackVoltage: '电堆电压(V)',
        stackPower: '电堆功率(kW)',
        theoreticalHydrogenConsumption: '理论反应消耗氢气量(mol/s)',
        theoreticalOxygenConsumption: '理论反应消耗氧气量(mol/s)',
        theoreticalWaterProduction: '理论反应产水量(mol/s)',
        actualHydrogenFlow: '实际入口H2流量(mol/s)',
        actualAirFlow: '实际入口Air流量(mol/s)',
        actualHydrogenFlowNLPM: '实际入口H2流量(NLPM)',
        actualAirFlowNLPM: '实际入口Air流量(NLPM)',
        reactionHeat: '反应产热量(LHV-kW)',
        stackEfficiency: '电堆效率(%)',
        
        // 氢气子系统结果标签
        systemHydrogenConsumption: '系统消耗氢气量(mol/s)',
        systemHydrogenSupplyNLPM: '系统供氢量(NLPM)',
        hydrogenExhaust: '氢气尾气排气(NLPM)',
        hydrogenRecirculation: '出口氢气循环量(mol/s)',
        hydrogenRecirculationNLPM: '出口氢气循环量(NLPM)',
        anodeOutletWater: '阳极出口总水量(mol/s)',
        anodeOutletTemp: '阳极出口温度(℃)',
        saturatedVaporPressure: '对应的饱和蒸汽压(kPa)',
        anodeOutletPressure: '阳极出口压力(kPa)',
        anodeOutletHumidity: '阳极出口相对湿度(%)',
        anodeLiquidWater: '阳极出口液态水量(mol/s)',
        anodeCondensationHeat: '阳极冷凝水放热(kW)',
        outletGaseousWater: '出口气态水量(mol/s)',
        anodeInletHydrogenTemp: '阳极入口氢气温度(℃)',
        saturatedVaporPressure1: '对应的饱和蒸汽压(kPa)',
        inletHydrogenHumidity: '入堆氢气相对湿度(%)',
        inletStackWater: '进入电堆水量(mol/s)',
        waterDistributionCoefficient: '水分布系数(阳极)',
        
        // 空气子系统结果标签
        systemAirSupply: '系统供空气量(mol/s)',
        systemAirSupplyNLPM: '系统供空气量(NLPM)',
        airPumpInletTemp: '空气泵入口温度(℃)',
        outletAirFlow: '出口空气流量(mol/s)',
        outletAirFlowNLPM: '出口空气流量(NLPM)',
        cathodeOutletWater: '阴极出口总水量(mol/s)',
        cathodeOutletWaterTooltip: '系统有加湿器需要将环境湿度(%)设为0',
        cathodeOutletTemp: '阴极出口温度(℃)',
        saturatedVaporPressure2: '对应的饱和蒸汽压(kPa)',
        cathodeOutletPressure: '阴极出口压力(kPa)',
        airOutletHumidity: '空气出口相对湿度(%)',
        outletLiquidWater: '出口液态水量(mol/s)',
        condensationHeat: '冷凝水放热(kW)',
        outletWaterVaporPressure: '出口水蒸气分压(理论值)(kPa)',
        outletWaterVaporPressure1: '出口水蒸气分压(实际值)(kPa)',
        outletDewPointTemp: '出口露点温度(℃)',
        intercoolerOutletTemp: '中冷器出口温度(℃)',
        ambientSaturatedVaporPressure: '环境饱和蒸汽压(kPa)',
        ambientWaterIntake: '从环境中带入水分(mol/s)',
        
        // 换热子系统结果标签
        coolantDensity: '冷却液密度(kg/m3)',
        coolantSpecificHeat: '冷却液比热(kJ/(kg·K))',
        reactionHeat1: '反应产热量(LHV-kW)',
        superSaturatedWaterCondensationHeat: '过饱和水冷凝放热量(kW)',
        intercoolerHeatLoad: '中冷器热负荷(kW)',
        systemTotalHeatLoad: '系统总热负荷(kW)',
        stackCoolantFlow: '系统冷却液流量(L/min)',
        
        // COG加湿器
        cogHumidifier: 'COG加湿器',
        
        // COG加湿器结果标签
        dryGasHumidificationWater: '干气加湿用水量(mol/s)',
        humidifierDrySidePressure: '干侧出口压力(kPa)',
        humidifierDrySideTemp: '干侧出口温度(℃)',
        humidifierDrySideSaturatedVaporPressure: '干侧出口饱和蒸汽压(kPa)',
        humidifierDrySideHumidity: '干侧出口相对湿度(%)',
        humidifierWetSidePressure: '湿侧出口压力(kPa)',
        humidifierWetSideTemp: '湿侧出口温度(℃)',
        humidifierWetSideWater: '湿侧出口水量(mol/s)',
        humidifierWetSideSaturatedVaporPressure: '湿侧出口饱和蒸汽压(kPa)',
        humidifierWetSideHumidity: '湿侧出口相对湿度(%)',
        
        // 空气热力计算页面
        airThermalTitle: '空气热力计算参数',
        airThermalResults: '空气热力计算结果',
        airThermalFormulas: '温升、定熵压缩轴功、功耗计算公式',
        airThermalNote: '注：流量数据与第一页关联，压力为绝压，是单位为Pa。可计算海拔高度为30000米。',
        
        // 动态性能分析页面
        dynamicPerformanceTitle: '动态性能分析（beta）',
        currentDensityHeader: '电流密度(A/cm²)',
        cellVoltageHeader: '节电压(V)',
        hydrogenRatioHeader: '氢气计量比',
        airRatioHeader: '空气计量比',
        anodeInletPressureHeader: '阳极入压力(kPa)',
        cathodeInletPressureHeader: '阴极入压力(kPa)',
        operatingTempDiffHeader: '操作温差(℃)',
        processDataButton: '处理数据',
        clearDataButton: '清空数据',
        dynamicPerformanceChart: '动态性能曲线',
        currentPosition: '当前位置: 0',
        dataPasteAreaPlaceholder: '请从Excel中复制数据并粘贴到此处（每行一个数据对，用制表符或空格分隔）',
        
        // 动态性能分析滑块显示标签
        sliderCurrentDensity: '电流密度',
        sliderCellVoltage: '节电压',
        sliderStackCurrent: '电堆电流',
        sliderStackPower: '电堆功率',
        sliderSystemHeatLoad: '系统总热负荷',
        sliderCoolantFlow: '电堆冷却液流量',
        sliderHydrogenRatio: '氢气计量比',
        sliderAirRatio: '空气计量比',
        sliderAnodePressure: '阳极入压力',
        sliderCathodePressure: '阴极入压力',
        sliderTempDiff: '操作温差',
        
        // 图表相关翻译
        chartTitle: '燃料电池动态性能曲线',
        chartVoltageLabel: '电流密度-节电压关系 (V)',
        chartCurrentLabel: '电流密度-电堆电流关系 (A)',
        chartPowerLabel: '电流密度-电堆功率关系 (kW)',
        chartHeatLoadLabel: '电流密度-系统总热负荷关系 (kW)',
        chartCoolantFlowLabel: '电流密度-电堆冷却液流量关系 (L/min)',
        chartXAxisTitle: '电流密度 (A/cm²)',
        chartYAxisVoltageTitle: '节电压 (V)',
        chartYAxisPowerTitle: '电堆功率 (kW)',
        chartYAxisCurrentTitle: '电堆电流 (A)',
        chartYAxisHeatLoadTitle: '系统总热负荷 (kW)',
        chartYAxisCoolantFlowTitle: '电堆冷却液流量 (L/min)',
        chartTooltipStackCurrent: '电堆电流',
        chartTooltipCellCount: '电堆节数',
        chartTooltipReactionArea: '反应面积',
        
        airGasConstant: '空气气体常数 J/(kg*K):',
        airSpecificHeat: '空气定压比热kJ/(kg·K):',
        airSpecificHeatRatio: '空气比热比(κ):',
        altitude: '所在地海拔(m):',
        airPumpEfficiency: '空气泵效率(%):',
        pressureAtHeight: '在高度h上的压力(Pa)：',
        densityAtHeight: '在高度h上的密度(kg/m3)：',
        temperatureKAtHeight: '在高度h上的温度(K)：',
        temperatureCAtHeight: '在高度h上的温度(℃)：',
        airInletVolumeFlow: '空气入口体积流量(m^3/s)：',
        airInletMassFlow: '空气入口质量流量(g/s)：',
        outletAirPressure: '出口空气压力(Pa)：',
        compressorPressureRatio: '空压机压比(ε)：',
        outletAirTempK: '出口空气温度(K)：',
        outletAirTempC: '出口空气温度(℃)：',
        airTempRise: '空气温升(K)：',
        isentropicCompressionWork: '定熵压缩轴功(W)：',
        compressorPowerConsumption: '空压机功耗(W)：',
        references: '参考文献',
        
        // 悬停公式翻译
        formulaStackCurrent: 'スタック電流(A) = 反応面積(cm²) * 電流密度(A/cm²)',
        formulaStackVoltage: 'スタック電圧(V) = セル電圧(V) * セル数',
        formulaStackPower: 'スタック出力(kW) = (スタック電流 * スタック電圧) / 1000',
        formulaTheoreticalHydrogenConsumption: '理論水素消費量(mol/s) = (反応面積 * 電流密度 * セル数) / (96485 * 2)',
        formulaTheoreticalOxygenConsumption: '理論酸素消費量(mol/s) = 理論水素消費量 / 2',
        formulaTheoreticalWaterProduction: '理論水生成量(mol/s) = 理論水素消費量',
        formulaActualHydrogenFlow: '実際のH2入口流量(mol/s) = 理論水素消費量 * 水素量論比',
        formulaActualAirFlow: '実際の空気入口流量(mol/s) = (理論水素消費量 / 2) * 空気量論比 / 0.21',
        formulaActualHydrogenFlowNLPM: '実際のH2入口流量(NLPM) = 実際のH2入口流量(mol/s) * 22.4 * 60',
        formulaActualAirFlowNLPM: '実際の空気入口流量(NLPM) = 実際の空気入口流量(mol/s) * 22.4 * 60',
        formulaReactionHeat: '反応発熱量(LHV-kW) = スタック出力 * (1.254 - セル電圧) / セル電圧',
        formulaStackEfficiency: 'スタック効率(%) = (セル電圧 / 1.254) * 100',
        formulaSystemHydrogenConsumption: 'システム水素消費量(mol/s) = 理論水素消費量 * 100 / 水素利用率',
        formulaSystemHydrogenSupplyNLPM: 'システム水素供給量(NLPM) = システム水素消費量 * 22.4 * 60',
        formulaHydrogenExhaust: '水素排気(NLPM) = システム水素供給量 * (1 - 水素利用率/100)',
        formulaHydrogenRecirculation: '出口水素循環量(mol/s) = 理論水素消費量 * (水素過剰比 - 1)',
        formulaHydrogenRecirculationNLPM: '出口水素循環量(NLPM) = 出口水素循環量(mol/s) * 22.4 * 60',
        formulaAnodeOutletWater: 'アノード出口水量(mol/s) = 理論水素消費量 * 水分布係数 + スタック入口水量',
        formulaAnodeOutletTemp: 'アノード出口温度(℃) = 動作温度',
        formulaSaturatedVaporPressure: '飽和蒸気圧(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T=温度）',
        formulaAnodeOutletPressure: 'アノード出口圧力(kPa) = アノード入口圧力 - アノード圧力損失',
        formulaAnodeOutletHumidity: 'アノード出口湿度(%) = アノード出口圧力*(アノード出口水量/(アノード出口水量+水素循環量))/飽和蒸気圧*100',
        formulaAnodeLiquidWater: 'アノード液体水量(mol/s) = 湿度>100%の場合、アノード出口水量 - 水素循環量*飽和蒸気圧/(アノード出口圧力-飽和蒸気圧)、そうでなければ0',
        formulaAnodeCondensationHeat: 'アノード凝縮熱(kW) = アノード液体水量*18*2258/1000（18は水のモル質量、2258は気化潜熱）',
        formulaOutletGaseousWater: '出口気体水量(mol/s) = アノード出口水量 - アノード液体水量',
        formulaAnodeInletHydrogenTemp: 'アノード入口水素温度(℃) = アノード入口温度',
        formulaInletHydrogenHumidity: '入口水素湿度(%) = 出口気体水量/(出口気体水量+システム水素供給量+水素循環量)*アノード入口圧力/飽和蒸気圧*100',
        formulaInletStackWater: 'スタック入口水量(mol/s) = アノード液体水量*(1-気液分離器効率/100) + 出口気体水量',
        formulaWaterDistributionCoefficient: '水分布係数(アノード) = 水分布係数設定値',
        formulaSystemAirSupply: 'システム空気供給量(mol/s) = 実際の空気入口流量(mol/s)',
        formulaSystemAirSupplyNLPM: 'システム空気供給量(NLPM) = 実際の空気入口流量(NLPM)',
        formulaAirPumpInletTemp: 'エアポンプ入口温度(℃) = 環境温度',
        formulaOutletAirFlow: '出口空気流量(mol/s) = 実際の空気入口流量 - 理論水素消費量/2',
        formulaOutletAirFlowNLPM: '出口空気流量(NLPM) = 出口空気流量*22.4*60',
        formulaCathodeOutletWater: 'カソード出口水量(mol/s) = 理論水生成量*(1-水分布係数) + 環境からの水分取込 + ドライガス加湿用水量',
        formulaCathodeOutletTemp: 'カソード出口温度(℃) = 動作温度',
        formulaCathodeOutletPressure: 'カソード出口圧力(kPa) = カソード入口圧力 - カソード圧力損失',
        formulaAirOutletHumidity: '空気出口湿度(%) = カソード出口圧力*(カソード出口水量/(カソード出口水量+出口空気流量))/飽和蒸気圧*100',
        formulaOutletLiquidWater: '出口液体水量(mol/s) = 湿度>100%の場合、カソード出口水量 - 出口空気流量*飽和蒸気圧/(カソード出口圧力-飽和蒸気圧)、そうでなければ0',
        formulaCondensationHeat: '凝縮熱(kW) = 出口液体水量*18*2258/1000（18は水のモル質量、2258は気化潜熱）',
        formulaOutletWaterVaporPressure: '出口水蒸気分圧(理論値)(kPa) = カソード出口圧力*(カソード出口水量/(カソード出口水量+出口空気流量))',
        formulaOutletWaterVaporPressure1: '出口水蒸気分圧(実際値)(kPa) = 湿度>100%の場合は飽和蒸気圧、そうでなければ理論値',
        formulaOutletDewPointTemp: '出口露点温度(℃) = 1657.46/(7.07406-log10(出口水蒸気分圧)) - 227.02',
        formulaIntercoolerOutletTemp: 'インタークーラー出口温度(℃) = 動作温度 - 温度差/2',
        formulaAmbientSaturatedVaporPressure: '環境飽和蒸気圧(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T=環境温度）',
        formulaAmbientWaterIntake: '環境からの水分取込(mol/s) = 湿度*環境飽和蒸気圧*実際の空気入口流量/101/100',
        formulaCoolantDensity: '冷却液密度(kg/m3) = エチレングリコール比率*1.7657 + 981.43（エチレングリコール溶液）',
        formulaCoolantSpecificHeat: '冷却液比熱(kJ/(kg·K)) = -0.0002*エチレングリコール比率^2 - 0.004*エチレングリコール比率 + 4.2',
        formulaReactionHeat1: '反応発熱量(LHV-kW) = スタック出力*(1.254-セル電圧)/セル電圧',
        formulaSuperSaturatedWaterCondensationHeat: '過飽和水凝縮放熱量(kW) = 凝縮熱 + アノード凝縮熱',
        formulaIntercoolerHeatLoad: 'インタークーラー熱負荷(kW) = 1.005*(システム空気供給量*28.96/1000)*(コンプレッサー出口温度-インタークーラー出口温度)',
        formulaSystemTotalHeatLoad: 'システム総熱負荷(kW) = インタークーラー熱負荷 + 過飽和水凝縮放熱量 + 反応発熱量',
        formulaStackCoolantFlow: 'システム冷却液流量(L/min) = システム総熱負荷/温度差/冷却液密度/冷却液比熱*1000*60',
        formulaDryGasHumidificationWater: 'ドライガス加湿用水量(mol/s) = (カソード出口水量 - 出口液体水量)*加湿器効率/100',
        formulaHumidifierDrySidePressure: 'ドライサイド出口圧力(kPa) = カソード入口圧力',
        formulaHumidifierDrySideTemp: 'ドライサイド出口温度(℃) = (インタークーラー出口温度 + 動作温度 - 温度差)/2',
        formulaHumidifierDrySideSaturatedVaporPressure: 'ドライサイド出口飽和蒸気圧(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T=温度）',
        formulaHumidifierDrySideHumidity: 'ドライサイド出口湿度(%) = ドライガス加湿用水量/実際の空気入口流量*加湿器ドライサイド出口圧力/ドライサイド出口飽和蒸気圧*100',
        formulaHumidifierWetSidePressure: 'ウェットサイド出口圧力(kPa) = カソード出口圧力 - 加湿器ウェットサイド圧力損失',
        formulaHumidifierWetSideTemp: 'ウェットサイド出口温度(℃) = 加湿器ドライサイド出口温度',
        formulaHumidifierWetSideWater: 'ウェットサイド出口水量(mol/s) = カソード出口水量 - 出口液体水量 - ドライガス加湿用水量',
        formulaHumidifierWetSideSaturatedVaporPressure: 'ウェットサイド出口飽和蒸気圧(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T=温度）',
        formulaHumidifierWetSideHumidity: 'ウェットサイド出口湿度(%) = ウェットサイド出口水量/出口空気流量*ウェットサイド出口圧力/ウェットサイド出口飽和蒸気圧*100',
        formulaPressureAtHeight: '高度hでの圧力(Pa) = altitude>11000mの場合、22631.8*exp((11000-altitude)/6340)；そうでなければ、101325*(1-altitude/44330)^5.25588',
        formulaDensityAtHeight: '高度hでの密度(kg/m3) = altitude>11000mの場合、0.3639*exp((11000-altitude)/6340)；そうでなければ、1.225*(1-altitude/44330)^4.25588',
        formulaTemperatureKAtHeight: '高度hでの温度(K) = altitude>11000mの場合、216.65；そうでなければ、288.15-0.0065*altitude',
        formulaTemperatureCAtHeight: '高度hでの温度(℃) = temperatureKAtHeight - 273.15',
        formulaAirInletVolumeFlow: '空気入口体積流量(m^3/s) = airFlowRate / 1000 / 60',
        formulaAirInletMassFlow: '空気入口質量流量(g/s) = airInletVolumeFlow * densityAtHeight * 1000',
        formulaOutletAirPressure: '出口空気圧力(Pa) = inletPressure * 100000 * (1 - intercoolerPressureLoss/100)',
        formulaCompressorPressureRatio: '空気圧縮機圧力比(ε) = outletAirPressure / inletAirPressure',
        formulaOutletAirTempK: '出口空気温度(K) = inletAirTemperature * (1 + ((outletAirPressure/inletAirPressure)^0.286-1)/compressorEfficiency)',
        formulaOutletAirTempC: '出口空気温度(℃) = outletAirTempK - 273.15',
        formulaAirTempRise: '空気温度上昇(K) = outletAirTempK - inletAirTemperature',
        formulaIsentropicCompressionWork: '等エントロピー圧縮軸仕事(W) = k/(k-1)*p1*V1*[1-(p2/p1)^((k-1)/k)]',
        formulaCompressorPowerConsumption: '空気圧縮機消費電力(W) = 空気入口質量流量 × 空気定圧比熱 × 空気温度上昇',
        formulaValveKvValue: '水：Kv(m3/h) = Q*sqrt(ρ/(1000*ΔP))；ガス亜臨界：Kv = QN/514*sqrt(T1*ρN/(P2*ΔP))；ガス超臨界：Kv = QN/(257*P1)*sqrt(T1*ρN)',
        formulaValveDNValue: 'DN(mm) = -77.861*Kv^6+256.11*Kv^5-331.17*Kv^4+215.74*Kv^3-77.502*Kv^2+20.183*Kv+0.476',
        formulaGasDensityResult: '媒体密度(kg/m3) = 標準密度*273.15/媒体温度*媒体圧力/101325',
        formulaGasFlowRateM3sResult: '媒体流量(m3/s) = 媒体流量(NLPM)/1000/60*101325/媒体圧力*媒体温度/273.15',
        formulaMainPipeAreaResult: '主管面積(m2) = 0.25*3.14159*主管内径^2/1000000',
        formulaMainPipeVelocityResult: '主管流速(m/s) = 媒体流量/主管面積',
        formulaBranchPipeAreaResult: '分岐管面積(m2) = 0.25*3.14159*分岐管内径^2/1000000',
        formulaBranchPipeVelocityResult: '分岐管流速(m/s) = 媒体流量/スタック数/分岐管面積',
        formulaReynoldsNumberResult: 'レイノルズ数 = 媒体密度*主管流速*主管内径/媒体動粘度/1000',
        formulaFrictionCoefficientResult: '摩擦係数 = (-0.5 / math.log10(管壁絶対粗さ/3.7/主管内径))^2',
        formulaPipeResistanceResult: '管路抵抗 = 摩擦係数*管路長さ/主管内径*媒体密度*主管流速^2/2',
        formulaElbowFrictionCoefficientResult: 'エルボ摩擦係数 = 30*摩擦係数',
        formulaTeeFrictionCoefficientResult: 'ティー摩擦係数 = 60*摩擦係数',
        formulaElbowResistanceResult: 'エルボ抵抗(kPa) = エルボ数*0.5*エルボ摩擦係数*媒体密度*主管流速^2/1000',
        formulaTeeResistanceResult: 'ティー抵抗(kPa) = ティー数*0.5*ティー摩擦係数*媒体密度*主管流速^2/1000',
        formulaLocalResistanceResult: '局所抵抗(kPa) = エルボ抵抗+ティー抵抗',
        formulaSystemResistanceResult: '管系抵抗(kPa) = 管路抵抗+局所抵抗',
        formulaWaterFlowRateM3sResult: '媒体流量(m3/s) = 媒体流量(NLPM)/1000/60',
        formulaWaterMainPipeAreaResult: '主管面積(m2) = 0.25*3.14159*主管内径^2/1000000',
        formulaWaterMainPipeVelocityResult: '主管流速(m/s) = 媒体流量/主管面積',
        formulaWaterBranchPipeAreaResult: '分岐管面積(m2) = 0.25*3.14159*分岐管内径^2/1000000',
        formulaWaterBranchPipeVelocityResult: '分岐管流速(m/s) = 媒体流量/スタック数/分岐管面積',
        formulaWaterReynoldsNumberResult: 'レイノルズ数 = 冷却液密度*主管流速*主管内径/媒体動粘度/1000',
        formulaWaterFrictionCoefficientResult: '摩擦係数 = (-0.5 / math.log10(管壁絶対粗さ/3.7/主管内径))^2',
        formulaWaterPipeResistanceResult: '管路抵抗(kPa) = 摩擦係数*管路長さ/主管内径*冷却液密度*主管流速^2/2',
        formulaWaterElbowFrictionCoefficientResult: 'エルボ摩擦係数 = 30*摩擦係数',
        formulaWaterTeeFrictionCoefficientResult: 'ティー摩擦係数 = 60*摩擦係数',
        formulaWaterElbowResistanceResult: 'エルボ抵抗(kPa) = エルボ数*0.5*エルボ摩擦係数*冷却液密度*主管流速^2/1000',
        formulaWaterTeeResistanceResult: 'ティー抵抗(kPa) = ティー数*0.5*ティー摩擦係数*冷却液密度*主管流速^2/1000',
        formulaWaterLocalResistanceResult: '局所抵抗(kPa) = エルボ抵抗+ティー抵抗',
        formulaWaterSystemResistanceResult: '管系抵抗(kPa) = 管路抵抗+局所抵抗',
        airThermalReference1: '《飞行器环境控制》[M]. 北京: 北京航空航天大学出版社, 2004。',
        
        // 氢气热值与度电数页面
        hydrogenValueTitle: '氢气热值与度电数',
        hydrogenLowHeatMol: '1摩尔氢气低热焓值，kJ/mol（气态水）',
        hydrogenHighHeatMol: '1摩尔氢气高热焓值，kJ/mol（液态水）',
        hydrogenLowHeatGram: '1克氢气低热焓值，J/g（气态水）',
        hydrogenHighHeatGram: '1克氢气高热焓值，J/g（液态水）',
        electricityEnergy: '1度电对应的能量，J',
        hydrogenLowElectricity: '1kg氢气低热值对应的度电数，kWh',
        hydrogenHighElectricity: '1kg氢气高热值对应的度电数，kWh',
        reactionEnthalpy: '反应焓',
        reactionEnthalpyDesc1: '反应焓是燃料的热潜能，表示能够从燃料中提取的最大能量；其中，与燃烧相关的焓变称为燃烧焓，用符号∆Hrxn或∆hrxn（表示每摩尔反应燃烧焓）；',
        reactionEnthalpyDesc2: '以氢气燃烧为例，氢气燃烧生成水过程中对外传递的最大能量就是氢的燃烧焓',
        reactionEnthalpyDesc3: '其中，产物为气态水的∆Hrxn是氢气燃烧的低位热值LHV,产物为液态水的∆Hrxn是氢气燃烧的高位热值HHV，LHV与HHV之间的差值是液态水的汽化潜热。',
        
        // 阀门流体计算页面
        valveFlowTitle: '阀门流体计算',
        flowRate: '流量(NLPM)',
        inletPressure: '入口压力(bar.a)',
        outletPressure: '出口压力(bar.a)',
        temperature: '温度(℃)',
        mediumSelect: '选择介质',
        hydrogen: '氢气',
        air: '空气',
        nitrogen: '氮气',
        oxygen: '氧气',
        argon: '氩气',
        helium: '氦气',
        carbonDioxide: '二氧化碳',
        methane: '甲烷',
        
        // 介质选项翻译键
        mediumHydrogen: '氢气',
        mediumAir: '空气',
        mediumNitrogen: '氮气',
        mediumWater: '水',
        mediumEthylene: '乙烯',
        mediumMethane: '甲烷',
        mediumOxygen: '氧气',
        mediumCO2: '二氧化碳',
        mediumHelium: '氦气',
        mediumBenzene: '苯',
        mediumEthanol: '乙醇',
        mediumChlorine: '氯气',
        mediumFreon: '氟利昂',
        mediumAmmonia: '氨气',
        mediumChloroform: '氯仿',
        mediumSteam: '蒸汽（100℃）',
        density: '密度',
        valveFlowResults: '阀门流体计算结果',
        kvValue: 'Kv值',
        valveFlowFormula: '计算公式',
        valveFlowFormulaDesc: 'Kv = Q × √(ρ / ΔP)',
        valveFlowNote: '注：Kv值计算范围暂时支持0.012~1.0。',
        valveFlowReference: '参考文献',
        valveKvValue: 'Kv(m3/h)：',
        valveDNValue: 'DN(mm)：',
        valveFormulas: '计算公式',
        valveSelectedDensity: '选择介质的密度为: 1.225 kg/m³',
        valveNote: '注：Kv值计算范围暂时支持0.012~1.0。',
        valveReference: '计算理论依据：通过Burkert官网流体计算数据拟合。',
        valveType: '阀门类型',
        valveDiameter: '阀门直径(mm)',
        flowCoefficient: '流量系数Cv',
        fluidDensity: '流体密度(kg/m3)',
        fluidViscosity: '流体粘度(Pa·s)',
        valveFlowRate: '阀门流量(L/min)',
        pressureDrop: '压降(kPa)',
        reynoldsNumber: '雷诺数',
        valveMediumType: '选择介质:',
        valveInletPressure: '入口压力(bar.a):',
        valveOutletPressure: '出口压力(bar.a):',
        valveFluidTemperature: '温度(℃):',
        valvePressureDrop: '压降',
        valveWaterKv: '水的Kv值(m3/h)',
        valveGasKv: '气体的Kv值(m3/h)',
        valveSubcritical: '次临界P2>1/2P1',
        valveSupercritical: '超临界P2<1/2P1',
        valveKvExplanation: 'Kv 流量系数[m3/h]',
        valveQNExplanation: 'QN 气体在标准状态下的流量 [m3/h]',
        valveP1Explanation: 'P1 阀门入口压力[bar]',
        valveP2Explanation: 'P2阀门出口压力[bar]',
        valveDeltaPExplanation: 'ΔP 阀两端压差P1-P2[bar]',
        valveRhoExplanation: 'ρ 密度[kg/m3]',
        valveRhoNExplanation: 'ρN 气体在标准状态下的密度[kg/m3]',
        valveT1Explanation: 'T1 介质温度[(273+t)K]',
        
        // 管路压损计算页面
        pipelinePressureTitle: '管路压损计算参数',
        gasCalculation: '气路计算',
        gasStdDensity: '介质标况密度(kg/m3)',
        gasPressure: '介质压力(Pa)',
        gasTemperature: '介质温度(K)',
        gasFlowRate: '介质流量(NLPM)',
        mainPipeDiameter: '主管内径(mm)',
        stackCount: '电堆个数(N)',
        branchPipeDiameter: '分堆入口管内径(mm)',
        gasViscosity: '介质动力粘度(mm)',
        pipeRoughness: '管壁绝对粗糙度',
        pipeLength: '管道长度(m)',
        elbowCount: '弯头个数(N)',
        teeCount: '三通个数(N)',
        gasCalculationResults: '气路计算结果',
        gasDensityResult: '介质密度(kg/m3)：',
        gasFlowRateM3sResult: '介质流量(m3/s)：',
        mainPipeAreaResult: '主管面积(m2)：',
        mainPipeVelocityResult: '主管流速(m/s)：',
        branchPipeAreaResult: '分堆入口管面积(m2)：',
        branchPipeVelocityResult: '分堆入口管流速(m/s)：',
        reynoldsNumberResult: '雷诺数：',
        frictionCoefficientResult: '摩擦系数：',
        pipeResistanceResult: '管道阻力：',
        elbowFrictionCoefficientResult: '弯头摩擦系数：',
        teeFrictionCoefficientResult: '三通摩擦系数：',
        elbowResistanceResult: '弯头阻力(kPa)：',
        teeResistanceResult: '三通阻力(kPa)：',
        localResistanceResult: '局部阻力(kPa)：',
        systemResistanceResult: '管系阻力(kPa)：',
        waterCalculation: '水路计算',
        coolantDensityWater: '冷却液密度(kg/m3)',
        waterFlowRate: '介质流量(NLPM)',
        waterMainPipeDiameter: '主管内径(mm)',
        waterStackCount: '电堆个数(N)',
        waterBranchPipeDiameter: '分堆入口管内径(mm)',
        waterViscosity: '介质动力粘度(mm)',
        waterPipeRoughness: '管壁绝对粗糙度',
        waterPipeLength: '管道长度(m)',
        waterElbowCount: '弯头个数(N)',
        waterTeeCount: '三通个数(N)',
        waterCalculationResults: '水路计算结果',
        waterFlowRateM3sResult: '介质流量(m3/s)：',
        waterMainPipeAreaResult: '主管面积(m2)：',
        waterMainPipeVelocityResult: '主管流速(m/s)：',
        waterBranchPipeAreaResult: '分堆入口管面积(m2)：',
        waterBranchPipeVelocityResult: '分堆入口管流速(m/s)：',
        waterReynoldsNumberResult: '雷诺数：',
        waterFrictionCoefficientResult: '摩擦系数：',
        waterPipeResistanceResult: '管道阻力(kPa)：',
        waterElbowFrictionCoefficientResult: '弯头摩擦系数：',
        waterTeeFrictionCoefficientResult: '三通摩擦系数：',
        waterElbowResistanceResult: '弯头阻力(kPa)：',
        waterTeeResistanceResult: '三通阻力(kPa)：',
        waterLocalResistanceResult: '局部阻力(kPa)：',
        waterSystemResistanceResult: '管系阻力(kPa)：',
        
        // 换热器/中冷器计算页面
        heatExchangerTitle: '换热器/中冷器计算',
        radiatorCalc: '散热器计算',
        intercoolerCalc: '中冷器计算',
        coolantHeatRatio: '冷却液带走热量比重 ξ',
        airTempDifference: '冷却空气流经散热器温差(℃)',
        radiatorKa: '散热器总传热系数Ka W/(m2·℃)',
        fanCount: '风扇个数',
        fanAreaRatio: '风扇面积/散热器面积比率α',
        fanDiameter: '单风扇叶轮直径(mm)',
        coolantTempDiff: '冷却液流经中冷器温差(℃)',
        intercoolerKa: '中冷器总传热系数Ka W/(m2·℃)',
        radiatorCalcResults: '散热器计算结果',
        intercoolerCalcResults: '中冷器计算结果',
        radiatorSystemTotalHeatLoad: '系统总热负荷(kW)',
        radiatorAmbientTemp: '环境温度(℃)',
        radiatorOutletAirTemp: '冷却空气出散热器温度(℃)',
        radiatorCoolantDensity: '冷却液密度(kg/m3)',
        radiatorCoolantSpecificHeat: '冷却液比热(kJ/(kg·K))',
        radiatorCoolantInletTemp: '冷却水进口温度(℃)',
        radiatorCoolantOutletTemp: '冷却水出口温度(℃)',
        radiatorCoolantFlow: '冷却循环流量(L/min)',
        radiatorLogMeanTempCorrection: '错流对数温差修正系数εΔt',
        requiredHeatDissipationArea: '所需散热面积(m2)',
        radiatorFrontalArea: '散热器迎风面积(m2)',
        requiredCoolingAirFlow: '所需冷却空气流量(m3/h)',
        singleFanAirFlow: '单风扇风量需求(m3/h)',
        intercoolerHeatLoad1: '中冷器热负荷(kW)',
        pressurizedAirInletTemp: '增压空气进口温度(℃)',
        pressurizedAirOutletTemp: '增压空气出口温度(℃)',
        intercoolerCoolantInletTemp: '冷却液进口温度(℃)',
        intercoolerCoolantOutletTemp: '冷却液出口温度(℃)',
        pressurizedAirFlow: '增压空气流量(L/min)',
        intercoolerCoolantFlow: '冷却液流量(L/min)',
        intercoolerLogMeanTempCorrection: '错流对数温差修正系数εΔt',
        intercoolerRequiredArea: '所需散热面积(m2)',
        
        // 燃料电池混合动力系统计算页面
        hybridSystemTitle: '燃料电池混合动力系统计算',
        vehicleParamsTitle: '整车参数表',
        vehicleMass: '满载质量(Kg)',
        range: '续驶里程(Km)',
        rollingResistance: '滚动阻力系数𝑓',
        dragCoefficient: '空气阻力系数Cd',
        maxSpeed: '最高车速(km/h)',
        maxGradeability: '最大爬坡度(%)',
        gradeabilitySpeed: '爬坡车速(km/h)',
        accelerationEndSpeed: '加速末车速(km/h)',
        accelerationTime: '加速时间(s)',
        frontalArea: '迎风面积(m2)',
        powertrainEfficiency: '整车动力传动系统效率η',
        rotatingMassCoefficient: '汽车旋转质量换算系数δ',
        finalDriveRatio: '主减速比iο',
        lowGearRatio: '变速器低档传动比ig',
        highGearRatio: '变速器高档传动比ig',
        tireRadius: '驱动轮胎半径(m)',
        accessoryPower: '整车附件功率(kW)',
        motorEfficiency: '驱动电机及控制器效率η',
        batteryEfficiency: '动力电池效率η',
        hydrogenBottlePressure: '氢气瓶压力(MPa)',
        hydrogenBottleVolume: '氢气瓶容积(L)',
        pemCellVoltage: '额定工况PEM节电压(V)',
        hydrogenPrice: '氢气价格(元/kg)',
        maxClimbingAngle: '最大爬坡角(θ)',
        acceleration: '加速阶段加速度(m/s2)',
        maxSpeedPower: 'Pmax1_最高车速功率(kW)',
        maxGradeabilityPower: 'Pmax2_最大爬坡功率(kW)',
        maxAccelerationPower: 'Pmax3_最大加速功率(kW)',
        motorPeakPower: '电机峰值功率(kW)',
        motorRatedPower: '电机额定功率(kW)',
        motorPeakRPM: '电机峰值转速(r/min)',
        motorRatedRPM: '电机额定转速(r/min)',
        fuelCellRequiredPower: '燃料电池额定功率(kW)',
        ratedConditionHydrogenConsumption: '额定工况PEM氢耗(g/s)',
        requiredHydrogenMass: 'PEM所需氢气质量(Kg)',
        singleBottleHydrogenMass: '单瓶存储氢气质量(Kg)',
        requiredBottleCount: '所需氢瓶数量(n)',
        batteryRequiredPower: '动力电池所需功率(kW)',
        rated100kmHydrogenConsumption: '额定百公里氢耗(kg/100km)',
        rated100kmHydrogenPrice: '额定百公里氢气价格(元/100km)',
        
        // 动态性能页面
        dynamicPerformanceTitle: '动态性能（beta）',
        
        // 实用小工具页面
        'tools.sumTool': '求和工具',
        'tools.velocityTool': '流速转换',
        'tools.sumInputPlaceholder': '请输入数字，用逗号或换行分隔',
        'tools.sumButton': '求和',
        'tools.clearButton': '清除',
        'tools.result': '结果: ',
        'tools.flowRate': '流量 (SLPM):',
        'tools.pipeDiameter': '管道直径 (mm):',
        'tools.calculateVelocity': '计算流速',
        'tools.velocity': '流速: ',
        'tools.area': '截面积: ',
        
        // 提示信息
        loginRequired: '需要先登录才能访问',
        processingData: '处理中...',
        exportSuccess: '导出成功',
        importSuccess: '导入成功',
        calculationComplete: '计算完成',
        
        // 第六页换热器/中冷器计算页面注释
        heatExchangerNote: '注：散热器计算到所需的散热面积和风扇个数即可，单个风扇的风量以及散热器迎风面积需要同时考虑所选风扇的效率和直径。中冷器只需要计算到散热面积和冷却液流量。Ka--散热器总传热系数，传统发动机散热器一般为104-143W/(m2·℃)，燃料电池为低温散热，取较低值，取115 W/(m2·℃)。',
        
        // 第七页燃料电池混合动力系统计算页面参考文献
        references: '参考文献',
        hybridSystemReference1: '王珂. 燃料电池混合动力系统设计[D]. [硕士学位论文]. 成都: 西南交通大学.',
        hybridSystemReference2: '赵春鹏. 燃料电池汽车混合动力系统设计研究[D]. [硕士学位论文]. 浙江: 浙江大学.',
        hybridSystemReference3: '陈浩. 燃料电池／锂电池混合动力系统优化管理[D]. [博士学位论文]. 浙江: 浙江大学.',
        hybridSystemReference4: '丁晨光. 氢燃料电池混合动力系统能量管理策略研究[D]. [硕士学位论文]. 成都: 电子科技大学.',
        hybridSystemReference5: '张鑫新. 基于深度Q学习的燃料电池混合动力汽车控制研究[D]. [硕士学位论文]. 重庆: 重庆交通大学.',
        
        // 程序说明对话框
        programInstructions: '程序说明',
        instruction1: '1、第一页为绝压计算，计算参数大多基于电密和节数；',
        instruction2: '2、此程序可以计算自增湿电堆，保持加湿器输入为零即可；',
        instruction3: '3、设计输入可以根据不同电堆和工况点进行保存和导入；',
        instruction4: '4、第二页空气热力计算海拔高度只会影响空压机的功耗，不会对第一页绝压计算产生影响；',
        instruction5: '5、可以同时打开多个窗口进行结果对比。',
        
        // 悬停公式翻译
        formulaStackCurrent: '电堆电流(A) = 反应面积(cm²) * 电流密度(A/cm²)',
        formulaStackVoltage: '电堆电压(V) = 单电池电压(V) * 电堆节数',
        formulaStackPower: '电堆功率(kW) = (电堆电流 * 电堆电压) / 1000',
        formulaTheoreticalHydrogenConsumption: '理论反应消耗氢气量(mol/s) = (反应面积 * 电流密度 * 电堆节数) / (96485 * 2)',
        formulaTheoreticalOxygenConsumption: '理论反应消耗氧气量(mol/s) = 理论反应消耗氢气量 / 2',
        formulaTheoreticalWaterProduction: '理论反应产水量(mol/s) = 理论反应消耗氢气量',
        formulaActualHydrogenFlow: '实际入口H2流量(mol/s) = 理论反应消耗氢气量 * 氢气计量比',
        formulaActualAirFlow: '实际入口Air流量(mol/s) = (理论反应消耗氢气量 / 2) * 空气计量比 / 0.21',
        formulaActualHydrogenFlowNLPM: '实际入口H2流量(NLPM) = 实际入口H2流量(mol/s) * 22.4 * 60',
        formulaActualAirFlowNLPM: '实际入口Air流量(NLPM) = 实际入口Air流量(mol/s) * 22.4 * 60',
        formulaReactionHeat: '反应产热量(LHV-kW) = 电堆功率 * (1.254 - 单电池电压) / 单电池电压',
        formulaStackEfficiency: '电堆效率(%) = (单电池电压 / 1.254) * 100',
        formulaSystemHydrogenConsumption: '系统消耗氢气量(mol/s) = 理论反应消耗氢气量 * 100 / 氢气利用率',
        formulaSystemHydrogenSupplyNLPM: '系统供氢量(NLPM) = 系统消耗氢气量 * 22.4 * 60',
        formulaHydrogenExhaust: '氢气尾气排气(NLPM) = 系统供氢量 * (1 - 氢气利用率/100)',
        formulaHydrogenRecirculation: '出口氢气循环量(mol/s) = 理论反应消耗氢气量 * (氢气过量比 - 1)',
        formulaHydrogenRecirculationNLPM: '出口氢气循环量(NLPM) = 出口氢气循环量(mol/s) * 22.4 * 60',
        formulaAnodeOutletWater: '阳极出口总水量(mol/s) = 理论反应消耗氢气量 * 水分布系数 + 进入电堆水量',
        formulaAnodeOutletTemp: '阳极出口温度(℃) = 操作温度',
        formulaSaturatedVaporPressure: '对应的饱和蒸汽压(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T为温度）',
        formulaAnodeOutletPressure: '阳极出口压力(kPa) = 阳极入口压力 - 阳极压损',
        formulaAnodeOutletHumidity: '阳极出口相对湿度(%) = 阳极出口压力*(阳极出口总水量/(阳极出口总水量+氢气循环量))/饱和蒸汽压*100',
        formulaAnodeLiquidWater: '阳极出口液态水量(mol/s) = 当相对湿度>100时，阳极出口总水量 - 氢气循环量*饱和蒸汽压/(阳极出口压力-饱和蒸汽压)，否则为0',
        formulaAnodeCondensationHeat: '阳极冷凝水放热(kW) = 阳极出口液态水量*18*2258/1000（18是水的摩尔质量，2258是汽化潜热）',
        formulaOutletGaseousWater: '出口气态水量(mol/s) = 阳极出口总水量 - 阳极出口液态水量',
        formulaAnodeInletHydrogenTemp: '阳极入口氢气温度(℃) = 阳极入口温度',
        formulaInletHydrogenHumidity: '入堆氢气相对湿度(%) = 出口气态水量/(出口气态水量+系统供氢量+氢气循环量)*阳极入口压力/饱和蒸汽压*100',
        formulaInletStackWater: '进入电堆水量(mol/s) = 阳极出口液态水量*(1-气液分离器效率/100) + 出口气态水量',
        formulaWaterDistributionCoefficient: '水分布系数(阳极) = 水分布系数设置值',
        formulaSystemAirSupply: '系统供空气量(mol/s) = 实际入口Air流量(mol/s)',
        formulaSystemAirSupplyNLPM: '系统供空气量(NLPM) = 实际入口Air流量(NLPM)',
        formulaAirPumpInletTemp: '空气泵入口温度(℃) = 环境温度',
        formulaOutletAirFlow: '出口空气流量(mol/s) = 实际入口Air流量 - 理论氢气消耗/2',
        formulaOutletAirFlowNLPM: '出口空气流量(NLPM) = 出口空气流量*22.4*60',
        formulaCathodeOutletWater: '阴极出口总水量(mol/s) = 理论产水量*(1-水分布系数) + 从环境中带入水分 + 干气加湿用水量',
        formulaCathodeOutletTemp: '阴极出口温度(℃) = 操作温度',
        formulaCathodeOutletPressure: '阴极出口压力(kPa) = 阴极入口压力 - 阴极压损',
        formulaAirOutletHumidity: '空气出口相对湿度(%) = 阴极出口压力*(阴极出口总水量/(阴极出口总水量+出口空气流量))/对应的饱和蒸汽压*100',
        formulaOutletLiquidWater: '出口液态水量(mol/s) = 当相对湿度>100时，阴极出口总水量 - 出口空气流量*饱和蒸汽压/(阴极出口压力-饱和蒸汽压)，否则为0',
        formulaCondensationHeat: '冷凝水放热(kW) = 出口液态水量*18*2258/1000（18是水的摩尔质量，2258是汽化潜热）',
        formulaOutletWaterVaporPressure: '出口水蒸气分压(理论值)(kPa) = 阴极出口压力*(阴极出口总水量/(阴极出口总水量+出口空气流量))',
        formulaOutletWaterVaporPressure1: '出口水蒸气分压(实际值)(kPa) = 当相对湿度>100时为饱和蒸汽压，否则为理论值',
        formulaOutletDewPointTemp: '出口露点温度(℃) = 1657.46/(7.07406-log10(出口水蒸气分压)) - 227.02',
        formulaIntercoolerOutletTemp: '中冷器出口温度(℃) = 操作温度 - 温度差/2',
        formulaAmbientSaturatedVaporPressure: '环境饱和蒸汽压(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T为环境温度）',
        formulaAmbientWaterIntake: '从环境中带入水分(mol/s) = 湿度*环境饱和蒸汽压*实际入口Air流量/101/100',
        formulaCoolantDensity: '冷却液密度(kg/m3) = 乙二醇占比*1.7657 + 981.43（乙二醇溶液）',
        formulaCoolantSpecificHeat: '冷却液比热(kJ/(kg·K)) = -0.0002*乙二醇占比^2 - 0.004*乙二醇占比 + 4.2',
        formulaReactionHeat1: '反应产热量(LHV-kW) = 电堆功率*(1.254-单电池电压)/单电池电压',
        formulaSuperSaturatedWaterCondensationHeat: '过饱和水冷凝放热量(kW) = 冷凝水放热 + 阳极冷凝水放热',
        formulaIntercoolerHeatLoad: '中冷器热负荷(kW) = 1.005*(系统供空气量*28.96/1000)*(空压机出口温度-中冷器出口温度)',
        formulaSystemTotalHeatLoad: '系统总热负荷(kW) = 中冷器热负荷 + 过饱和水冷凝放热量 + 反应产热量',
        formulaStackCoolantFlow: '系统冷却液流量(L/min) = 系统总热负荷/温度差/冷却液密度/冷却液比热*1000*60',
        formulaDryGasHumidificationWater: '干气加湿用水量(mol/s) = (阴极出口总水量 - 出口液态水量)*加湿器效率/100',
        formulaHumidifierDrySidePressure: '干侧出口压力(kPa) = 阴极入口压力',
        formulaHumidifierDrySideTemp: '干侧出口温度(℃) = (中冷器出口温度 + 操作温度 - 温度差)/2',
        formulaHumidifierDrySideSaturatedVaporPressure: '干侧出口饱和蒸汽压(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T为温度）',
        formulaHumidifierDrySideHumidity: '干侧出口相对湿度(%) = 干气加湿用水量/实际入口Air流量*加湿器干侧出口压力/干侧出口饱和蒸汽压*100',
        formulaHumidifierWetSidePressure: '湿侧出口压力(kPa) = 阴极出口压力 - 加湿器湿侧压力损失',
        formulaHumidifierWetSideTemp: '湿侧出口温度(℃) = 加湿器干侧出口温度',
        formulaHumidifierWetSideWater: '湿侧出口水量(mol/s) = 阴极出口总水量 - 出口液态水量 - 干气加湿用水量',
        formulaHumidifierWetSideSaturatedVaporPressure: '湿侧出口饱和蒸汽压(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T为温度）',
        formulaHumidifierWetSideHumidity: '湿侧出口相对湿度(%) = 湿侧出口水量/出口空气流量*湿侧出口压力/湿侧出口饱和蒸汽压*100',
        formulaPressureAtHeight: '在高度h上的压力(Pa) = 当altitude>11000m时，22631.8*exp((11000-altitude)/6340)；否则，101325*(1-altitude/44330)^5.25588',
        formulaDensityAtHeight: '在高度h上的密度(kg/m3) = 当altitude>11000m时，0.3639*exp((11000-altitude)/6340)；否则，1.225*(1-altitude/44330)^4.25588',
        formulaTemperatureKAtHeight: '在高度h上的温度(K) = 当altitude>11000m时，216.65；否则，288.15-0.0065*altitude',
        formulaTemperatureCAtHeight: '在高度h上的温度(℃) = temperatureKAtHeight - 273.15',
        formulaAirInletVolumeFlow: '空气入口体积流量(m^3/s) = airFlowRate / 1000 / 60',
        formulaAirInletMassFlow: '空气入口质量流量(g/s) = airInletVolumeFlow * densityAtHeight * 1000',
        formulaOutletAirPressure: '出口空气压力(Pa) = inletPressure * 100000 * (1 - intercoolerPressureLoss/100)',
        formulaCompressorPressureRatio: '空压机压比(ε) = outletAirPressure / inletAirPressure',
        formulaOutletAirTempK: '出口空气温度(K) = inletAirTemperature * (1 + ((outletAirPressure/inletAirPressure)^0.286-1)/compressorEfficiency)',
        formulaOutletAirTempC: '出口空气温度(℃) = outletAirTempK - 273.15',
        formulaAirTempRise: '空气温升(K) = outletAirTempK - inletAirTemperature',
        formulaIsentropicCompressionWork: '定熵压缩轴功(W) = k/(k-1)*p1*V1*[1-(p2/p1)^((k-1)/k)]',
        formulaCompressorPowerConsumption: '空压机功耗(W) = 空气入口质量流量 × 空气定压比热 × 空气温升',
        formulaValveKvValue: '水：Kv(m3/h) = Q*sqrt(ρ/(1000*ΔP))；气体次临界：Kv = QN/514*sqrt(T1*ρN/(P2*ΔP))；气体超临界：Kv = QN/(257*P1)*sqrt(T1*ρN)',
        formulaValveDNValue: 'DN(mm) = -77.861*Kv^6+256.11*Kv^5-331.17*Kv^4+215.74*Kv^3-77.502*Kv^2+20.183*Kv+0.476',
        formulaGasDensityResult: '介质密度(kg/m3) = 标况密度*273.15/介质温度*介质压力/101325',
        formulaGasFlowRateM3sResult: '介质流量(m3/s) = 介质流量(NLPM)/1000/60*101325/介质压力*介质温度/273.15',
        formulaMainPipeAreaResult: '主管面积(m2) = 0.25*3.14159*主管内径^2/1000000',
        formulaMainPipeVelocityResult: '主管流速(m/s) = 介质流量/主管面积',
        formulaBranchPipeAreaResult: '分堆入口管面积(m2) = 0.25*3.14159*分堆入口管内径^2/1000000',
        formulaBranchPipeVelocityResult: '分堆入口管流速(m/s) = 介质流量/电堆个数/分堆入口管面积',
        formulaReynoldsNumberResult: '雷诺数 = 介质密度*主管流速*主管内径/介质动力粘度/1000',
        formulaFrictionCoefficientResult: '摩擦系数 = (-0.5 / math.log10(管壁绝对粗糙度/3.7/主管内径))^2',
        formulaPipeResistanceResult: '管道阻力 = 摩擦系数*管道长度/主管内径*介质密度*主管流速^2/2',
        formulaElbowFrictionCoefficientResult: '弯头摩擦系数 = 30*摩擦系数',
        formulaTeeFrictionCoefficientResult: '三通摩擦系数 = 60*摩擦系数',
        formulaElbowResistanceResult: '弯头阻力(kPa) = 弯头个数*0.5*弯头摩擦系数*介质密度*主管流速^2/1000',
        formulaTeeResistanceResult: '三通阻力(kPa) = 三通个数*0.5*三通摩擦系数*介质密度*主管流速^2/1000',
        formulaLocalResistanceResult: '局部阻力(kPa) = 弯头阻力+三通阻力',
        formulaSystemResistanceResult: '管系阻力(kPa) = 管道阻力+局部阻力',
        formulaWaterFlowRateM3sResult: '介质流量(m3/s) = 介质流量(NLPM)/1000/60',
        formulaWaterMainPipeAreaResult: '主管面积(m2) = 0.25*3.14159*主管内径^2/1000000',
        formulaWaterMainPipeVelocityResult: '主管流速(m/s) = 介质流量/主管面积',
        formulaWaterBranchPipeAreaResult: '分堆入口管面积(m2) = 0.25*3.14159*分堆入口管内径^2/1000000',
        formulaWaterBranchPipeVelocityResult: '分堆入口管流速(m/s) = 介质流量/电堆个数/分堆入口管面积',
        formulaWaterReynoldsNumberResult: '雷诺数 = 冷却液密度*主管流速*主管内径/介质动力粘度/1000',
        formulaWaterFrictionCoefficientResult: '摩擦系数 = (-0.5 / math.log10(管壁绝对粗糙度/3.7/主管内径))^2',
        formulaWaterPipeResistanceResult: '管道阻力(kPa) = 摩擦系数*管道长度/主管内径*冷却液密度*主管流速^2/2',
        formulaWaterElbowFrictionCoefficientResult: '弯头摩擦系数 = 30*摩擦系数',
        formulaWaterTeeFrictionCoefficientResult: '三通摩擦系数 = 60*摩擦系数',
        formulaWaterElbowResistanceResult: '弯头阻力(kPa) = 弯头个数*0.5*弯头摩擦系数*冷却液密度*主管流速^2/1000',
        formulaWaterTeeResistanceResult: '三通阻力(kPa) = 三通个数*0.5*三通摩擦系数*冷却液密度*主管流速^2/1000',
        formulaWaterLocalResistanceResult: '局部阻力(kPa) = 弯头阻力+三通阻力',
        formulaWaterSystemResistanceResult: '管系阻力(kPa) = 管道阻力+局部阻力',
        
        // 页脚和关于我们/联系我们
        copyright: '© 2025 Fuel Cell Calculator. All rights reserved.',
        aboutUs: '关于我们',
        contactUs: '联系我们',
        aboutUsTitle: '关于我们',
        aboutUsContent: 'Fuel Cell Calculator 是一个专业的燃料电池计算工具，旨在为工程师和研究人员提供准确的计算服务。感谢程同学在软件开发中提供的支持和校对工作。',
        contactUsTitle: '联系我们',
        contactUsContent: '如有任何问题或建议，请通过以下方式联系我们：',
        contactEmail: '邮箱: 363383119@qq.com',
        
        // Login/Register Modal
        loginTitle: '登录',
        registerTitle: '注册',
        emailLabel: '邮箱:',
        passwordLabel: '密码:',
        confirmPasswordLabel: '确认密码:',
        loginButton: '登录',
        registerButton: '注册',
        noAccountText: '还没有账户？',
        registerNowLink: '立即注册',
        hasAccountText: '已有账户？',
        loginNowLink: '立即登录',
        
        // Version Log Modal
        versionLogTitle: '版本更新日志',
        version221Title: 'V2.21 更新内容',
        version221Item1: '增加第七页额定百公里氢耗和价格',
        version221Item2: '增加了第一页强迫加湿环境湿度设置问题',
        version221Item3: '修正bug',
        version221Item4: '增加了3种语言可切换方便更多人使用',
        version221Item5: '开源源代码到Github仓库',
        version220Title: 'V2.20 更新内容',
        version220Item1: '增加动态性能（beta）模块',
        version220Item2: '增加参考文献内容',
        version220Item3: '并且持续升级之中',
        version212Title: 'V2.12 更新内容',
        version212Item1: '修复了混合动力系统计算中的错误',
        version212Item2: '优化了散热器和中冷器计算的准确性',
        version212Item3: '更新了错流对数温差修正系数的计算公式',
        version212Item4: '添加了结果项的公式悬停功能，方便用户理解计算原理★★★',
        version212Item5: '提升了页面响应速度和用户体验',
        version211Title: 'V2.11 更新内容',
        version211Item1: '增加了混合动力系统计算页面',
        version211Item2: '优化了实用小工具功能',
        version211Item3: '修复了管路压损计算中的bug',
        version211Item4: '提升了系统整体稳定性',
        version210Title: 'V2.10 更新内容',
        version210Item1: '全新改版界面设计，提升用户体验',
        version210Item2: '增加了多个计算模块',
        version210Item3: '优化了数据导入导出功能',
        version210Item4: '修复了已知问题'
    },
    
    'en': {
        // Page title and navigation
        pageTitle: 'Fuel Cell Calculator V2.21',
        tabSystemDesign: 'System Design Calculation',
        tabAirThermal: 'Air Thermal Calculation',
        tabHydrogenValue: 'Hydrogen Heating Value & Electricity',
        tabValveFlow: 'Valve Fluid Calculation',
        tabPipelinePressure: 'Pipeline Pressure Loss',
        tabHeatExchanger: 'Heat Exchanger/Intercooler',
        tabHybridSystem: 'Fuel Cell Hybrid System',
        tabDynamicPerformance: 'Dynamic Performance (beta)',
        tabTools: 'Utility Tools',
        
        // Button text
        btnExport: 'Export Input',
        btnImport: 'Import Input',
        btnDownload: 'Download Offline',
        btnLogin: 'Login',
        btnLogout: 'Logout',
        btnViewProfile: 'View Profile',
        btnGithub: 'View Source Code',
        btnVersionLog: 'View Version Log',
        btnCalculate: 'Calculate',
        btnClear: 'Clear',
        btnSum: 'Sum',
        
        // Language selector
        languageSwitch: 'Switch Language',
        currentLanguage: 'English',
        
        // System design calculation page
        stackDesignTitle: 'Stack Basic Design Parameters',
        
        // Input labels
        cellVoltage: 'Cell Voltage (V)',
        cellCount: 'Cell Count',
        reactionArea: 'Reaction Area (cm2)',
        currentDensity: 'Current Density (A/cm2)',
        airRatio: 'Air Stoichiometry',
        hydrogenRatio: 'Hydrogen Stoichiometry',
        operatingTemp: 'Operating Temperature (℃)',
        ambientTemp: 'Ambient Temperature (℃)',
        tempDifference: 'Temperature Difference (℃)',
        humidity: 'Ambient Humidity (%)',
        hydrogenUtilization: 'Hydrogen Utilization (%)',
        anodeInletPressure: 'Anode Inlet Pressure (kPa)',
        cathodeInletPressure: 'Cathode Inlet Pressure (kPa)',
        anodePressureLoss: 'Anode Pressure Loss (kPa)',
        cathodePressureLoss: 'Cathode Pressure Loss (kPa)',
        coolingPressureLoss: 'Cooling Pressure Loss (kPa)',
        waterDistribution: 'Anode Water Distribution',
        anodeInletTemp: 'Anode Inlet Temperature (℃)',
        gasSeparatorEfficiency: 'Gas Separator Efficiency (%)',
        intercoolerPressureLoss: 'Intercooler Pressure Loss (kPa)',
        compressorOutletTemp: 'Compressor Outlet Temperature (℃)',
        glycolPercentage: 'Glycol Percentage (%)',
        humidifierEfficiency: 'Humidifier Efficiency (%)',
        humidifierDryLoss: 'Humidifier Dry Side Loss (kPa)',
        humidifierWetLoss: 'Humidifier Wet Side Loss (kPa)',
        
        // Result labels
        resultStackCalc: 'Stack Calculation',
        resultHydrogenSystem: 'Hydrogen Subsystem',
        resultAirSystem: 'Air Subsystem',
        resultHeatSystem: 'Heat Exchange Subsystem',
        
        stackCurrent: 'Stack Current (A)',
        stackVoltage: 'Stack Voltage (V)',
        stackPower: 'Stack Power (kW)',
        theoreticalHydrogenConsumption: 'Theoretical H2 Consumption (mol/s)',
        theoreticalOxygenConsumption: 'Theoretical O2 Consumption (mol/s)',
        theoreticalWaterProduction: 'Theoretical Water Production (mol/s)',
        actualHydrogenFlow: 'Actual H2 Inlet Flow (mol/s)',
        actualAirFlow: 'Actual Air Inlet Flow (mol/s)',
        actualHydrogenFlowNLPM: 'Actual H2 Inlet Flow (NLPM)',
        actualAirFlowNLPM: 'Actual Air Inlet Flow (NLPM)',
        reactionHeat: 'Reaction Heat (LHV-kW)',
        stackEfficiency: 'Stack Efficiency (%)',
        
        // Hydrogen subsystem result labels
        systemHydrogenConsumption: 'System H2 Consumption (mol/s)',
        systemHydrogenSupplyNLPM: 'System H2 Supply (NLPM)',
        hydrogenExhaust: 'H2 Exhaust (NLPM)',
        hydrogenRecirculation: 'Outlet H2 Recirculation (mol/s)',
        hydrogenRecirculationNLPM: 'Outlet H2 Recirculation (NLPM)',
        anodeOutletWater: 'Anode Outlet Water (mol/s)',
        anodeOutletTemp: 'Anode Outlet Temperature (℃)',
        saturatedVaporPressure: 'Saturated Vapor Pressure (kPa)',
        anodeOutletPressure: 'Anode Outlet Pressure (kPa)',
        anodeOutletHumidity: 'Anode Outlet Humidity (%)',
        anodeLiquidWater: 'Anode Liquid Water (mol/s)',
        anodeCondensationHeat: 'Anode Condensation Heat (kW)',
        outletGaseousWater: 'Outlet Gaseous Water (mol/s)',
        anodeInletHydrogenTemp: 'Anode Inlet H2 Temperature (℃)',
        saturatedVaporPressure1: 'Saturated Vapor Pressure (kPa)',
        inletHydrogenHumidity: 'Inlet H2 Humidity (%)',
        inletStackWater: 'Inlet Stack Water (mol/s)',
        waterDistributionCoefficient: 'Water Distribution Coefficient (Anode)',
        
        // Air subsystem result labels
        systemAirSupply: 'System Air Supply (mol/s)',
        systemAirSupplyNLPM: 'System Air Supply (NLPM)',
        airPumpInletTemp: 'Air Pump Inlet Temperature (℃)',
        outletAirFlow: 'Outlet Air Flow (mol/s)',
        outletAirFlowNLPM: 'Outlet Air Flow (NLPM)',
        cathodeOutletWater: 'Cathode Outlet Water (mol/s)',
        cathodeOutletWaterTooltip: 'Systems with humidifiers need to set ambient humidity (%) to 0',
        cathodeOutletTemp: 'Cathode Outlet Temperature (℃)',
        saturatedVaporPressure2: 'Saturated Vapor Pressure (kPa)',
        cathodeOutletPressure: 'Cathode Outlet Pressure (kPa)',
        airOutletHumidity: 'Air Outlet Humidity (%)',
        outletLiquidWater: 'Outlet Liquid Water (mol/s)',
        condensationHeat: 'Condensation Heat (kW)',
        outletWaterVaporPressure: 'Outlet Water Vapor Pressure (Theoretical) (kPa)',
        outletWaterVaporPressure1: 'Outlet Water Vapor Pressure (Actual) (kPa)',
        outletDewPointTemp: 'Outlet Dew Point Temperature (℃)',
        intercoolerOutletTemp: 'Intercooler Outlet Temperature (℃)',
        ambientSaturatedVaporPressure: 'Ambient Saturated Vapor Pressure (kPa)',
        ambientWaterIntake: 'Ambient Water Intake (mol/s)',
        
        // Heat exchange subsystem result labels
        coolantDensity: 'Coolant Density (kg/m3)',
        coolantSpecificHeat: 'Coolant Specific Heat (kJ/(kg·K))',
        reactionHeat1: 'Reaction Heat (LHV-kW)',
        superSaturatedWaterCondensationHeat: 'Supersaturated Water Condensation Heat (kW)',
        intercoolerHeatLoad: 'Intercooler Heat Load (kW)',
        systemTotalHeatLoad: 'System Total Heat Load (kW)',
        stackCoolantFlow: 'System Coolant Flow (L/min)',
        
        // COG humidifier result labels
        dryGasHumidificationWater: 'Dry Gas Humidification Water (mol/s)',
        humidifierDrySidePressure: 'Humidifier Dry Side Pressure (kPa)',
        humidifierDrySideTemp: 'Humidifier Dry Side Temperature (℃)',
        humidifierDrySideSaturatedVaporPressure: 'Humidifier Dry Side Saturated Vapor Pressure (kPa)',
        humidifierDrySideHumidity: 'Humidifier Dry Side Humidity (%)',
        humidifierWetSidePressure: 'Humidifier Wet Side Pressure (kPa)',
        humidifierWetSideTemp: 'Humidifier Wet Side Temperature (℃)',
        humidifierWetSideWater: 'Humidifier Wet Side Water (mol/s)',
        humidifierWetSideSaturatedVaporPressure: 'Humidifier Wet Side Saturated Vapor Pressure (kPa)',
        humidifierWetSideHumidity: 'Humidifier Wet Side Humidity (%)',
        
        // Air thermal calculation page
        airThermalTitle: 'Air Thermal Calculation',
        altitude: 'Altitude (m)',
        airDensity: 'Air Density (kg/m3)',
        airSpecificHeat: 'Air Specific Heat (kJ/(kg·K))',
        airViscosity: 'Air Dynamic Viscosity (Pa·s)',
        airThermalConductivity: 'Air Thermal Conductivity (W/(m·K))',
        airPrandtlNumber: 'Air Prandtl Number',
        compressorPower: 'Compressor Power (kW)',
        compressorEfficiency: 'Compressor Efficiency (%)',
        airThermalTitle: 'Air Thermal Calculation Parameters',
        airThermalResults: 'Air Thermal Calculation Results',
        airThermalFormulas: 'Temperature Rise, Isentropic Compression Work, Power Consumption Formulas',
        airThermalNote: 'Note: Flow data is linked to the first page, pressure is absolute pressure in Pa. Can calculate altitude up to 30000 meters.',
        
        // Dynamic Performance Analysis Page
        dynamicPerformanceTitle: 'Dynamic Performance Analysis (beta)',
        currentDensityHeader: 'Current Density (A/cm²)',
        cellVoltageHeader: 'Cell Voltage (V)',
        hydrogenRatioHeader: 'Hydrogen Ratio',
        airRatioHeader: 'Air Ratio',
        anodeInletPressureHeader: 'Anode Inlet Pressure (kPa)',
        cathodeInletPressureHeader: 'Cathode Inlet Pressure (kPa)',
        operatingTempDiffHeader: 'Operating Temperature Difference (℃)',
        processDataButton: 'Process Data',
        clearDataButton: 'Clear Data',
        dynamicPerformanceChart: 'Dynamic Performance Chart',
        currentPosition: 'Current Position: 0',
        dataPasteAreaPlaceholder: 'Copy data from Excel and paste here (one data pair per line, separated by tabs or spaces)',
        
        // Dynamic performance analysis slider display labels
        sliderCurrentDensity: 'Current Density',
        sliderCellVoltage: 'Cell Voltage',
        sliderStackCurrent: 'Stack Current',
        sliderStackPower: 'Stack Power',
        sliderSystemHeatLoad: 'System Total Heat Load',
        sliderCoolantFlow: 'Stack Coolant Flow',
        sliderHydrogenRatio: 'Hydrogen Stoichiometry',
        sliderAirRatio: 'Air Stoichiometry',
        sliderAnodePressure: 'Anode Inlet Pressure',
        sliderCathodePressure: 'Cathode Inlet Pressure',
        sliderTempDiff: 'Operating Temperature Difference',
        
        // Chart related translations
        chartTitle: 'Fuel Cell Dynamic Performance Curve',
        chartVoltageLabel: 'Current Density-Cell Voltage Relationship (V)',
        chartCurrentLabel: 'Current Density-Stack Current Relationship (A)',
        chartPowerLabel: 'Current Density-Stack Power Relationship (kW)',
        chartHeatLoadLabel: 'Current Density-System Total Heat Load Relationship (kW)',
        chartCoolantFlowLabel: 'Current Density-Stack Coolant Flow Relationship (L/min)',
        chartXAxisTitle: 'Current Density (A/cm²)',
        chartYAxisVoltageTitle: 'Cell Voltage (V)',
        chartYAxisPowerTitle: 'Stack Power (kW)',
        chartYAxisCurrentTitle: 'Stack Current (A)',
        chartYAxisHeatLoadTitle: 'System Total Heat Load (kW)',
        chartYAxisCoolantFlowTitle: 'Stack Coolant Flow (L/min)',
        chartTooltipStackCurrent: 'Stack Current',
        chartTooltipCellCount: 'Cell Count',
        chartTooltipReactionArea: 'Reaction Area',
        
        airGasConstant: 'Air Gas Constant J/(kg*K):',
        airSpecificHeat: 'Air Specific Heat kJ/(kg·K):',
        airSpecificHeatRatio: 'Air Specific Heat Ratio (κ):',
        altitude: 'Altitude (m):',
        airPumpEfficiency: 'Air Pump Efficiency (%):',
        pressureAtHeight: 'Pressure at Height h (Pa):',
        densityAtHeight: 'Density at Height h (kg/m3):',
        temperatureKAtHeight: 'Temperature at Height h (K):',
        temperatureCAtHeight: 'Temperature at Height h (℃):',
        airInletVolumeFlow: 'Air Inlet Volume Flow (m^3/s):',
        airInletMassFlow: 'Air Inlet Mass Flow (g/s):',
        outletAirPressure: 'Outlet Air Pressure (Pa):',
        compressorPressureRatio: 'Compressor Pressure Ratio (ε):',
        outletAirTempK: 'Outlet Air Temperature (K):',
        outletAirTempC: 'Outlet Air Temperature (℃):',
        airTempRise: 'Air Temperature Rise (K):',
        isentropicCompressionWork: 'Isentropic Compression Work (W):',
        compressorPowerConsumption: 'Compressor Power Consumption (W):',
        references: 'References',
        airThermalReference1: 'Aircraft Environmental Control [M]. Beijing: Beijing University of Aeronautics and Astronautics Press, 2004.',
        
        // COG Humidifier
        cogHumidifier: 'COG Humidifier',
        
        // Hydrogen heating value page
        hydrogenValueTitle: 'Hydrogen Heating Value & Electricity',
        hydrogenLowHeatMol: '1 mol H2 Low Heat Enthalpy, kJ/mol (gaseous water)',
        hydrogenHighHeatMol: '1 mol H2 High Heat Enthalpy, kJ/mol (liquid water)',
        hydrogenLowHeatGram: '1 g H2 Low Heat Enthalpy, J/g (gaseous water)',
        hydrogenHighHeatGram: '1 g H2 High Heat Enthalpy, J/g (liquid water)',
        electricityEnergy: '1 kWh Corresponding Energy, J',
        hydrogenLowElectricity: '1 kg H2 Low Heat Value Electricity, kWh',
        hydrogenHighElectricity: '1 kg H2 High Heat Value Electricity, kWh',
        reactionEnthalpy: 'Reaction Enthalpy',
        reactionEnthalpyDesc1: 'Reaction enthalpy is the thermal potential of fuel, representing the maximum energy that can be extracted from fuel; among them, the enthalpy change related to combustion is called combustion enthalpy, denoted by ∆Hrxn or ∆hrxn (representing combustion enthalpy per mole of reaction);',
        reactionEnthalpyDesc2: 'Taking hydrogen combustion as an example, the maximum energy transferred externally during the process of hydrogen combustion to produce water is the combustion enthalpy of hydrogen',
        reactionEnthalpyDesc3: 'Among them, ∆Hrxn with gaseous water as product is the low heating value LHV of hydrogen combustion, ∆Hrxn with liquid water as product is the high heating value HHV of hydrogen combustion, and the difference between LHV and HHV is the latent heat of vaporization of liquid water.',
        
        // Valve fluid calculation page
        valveFlowTitle: 'Valve Fluid Calculation',
        flowRate: 'Flow Rate (NLPM)',
        inletPressure: 'Inlet Pressure (bar.a)',
        outletPressure: 'Outlet Pressure (bar.a)',
        temperature: 'Temperature (℃)',
        mediumSelect: 'Select Medium',
        hydrogen: 'Hydrogen',
        air: 'Air',
        nitrogen: 'Nitrogen',
        oxygen: 'Oxygen',
        argon: 'Argon',
        helium: 'Helium',
        carbonDioxide: 'Carbon Dioxide',
        methane: 'Methane',
        
        // Medium option translation keys
        mediumHydrogen: 'Hydrogen',
        mediumAir: 'Air',
        mediumNitrogen: 'Nitrogen',
        mediumWater: 'Water',
        mediumEthylene: 'Ethylene',
        mediumMethane: 'Methane',
        mediumOxygen: 'Oxygen',
        mediumCO2: 'Carbon Dioxide',
        mediumHelium: 'Helium',
        mediumBenzene: 'Benzene',
        mediumEthanol: 'Ethanol',
        mediumChlorine: 'Chlorine',
        mediumFreon: 'Freon',
        mediumAmmonia: 'Ammonia',
        mediumChloroform: 'Chloroform',
        mediumSteam: 'Steam (100℃)',
        density: 'Density',
        valveFlowResults: 'Valve Flow Calculation Results',
        kvValue: 'Kv Value',
        valveFlowFormula: 'Calculation Formula',
        valveFlowFormulaDesc: 'Kv = Q × √(ρ / ΔP)',
        valveFlowNote: 'Note: Kv value calculation range currently supports 0.012~1.0.',
        valveFlowReference: 'References',
        valveKvValue: 'Kv(m3/h):',
        valveDNValue: 'DN(mm):',
        valveFormulas: 'Calculation Formulas',
        valveSelectedDensity: 'Selected medium density: 1.225 kg/m³',
        valveNote: 'Note: Kv value calculation range currently supports 0.012~1.0.',
        valveReference: 'Calculation theoretical basis: Fitted through Burkert official website fluid calculation data.',
        valveType: 'Valve Type',
        valveDiameter: 'Valve Diameter (mm)',
        flowCoefficient: 'Flow Coefficient Cv',
        fluidDensity: 'Fluid Density (kg/m3)',
        fluidViscosity: 'Fluid Viscosity (Pa·s)',
        valveFlowRate: 'Valve Flow Rate (L/min)',
        pressureDrop: 'Pressure Drop (kPa)',
        reynoldsNumber: 'Reynolds Number',
        valveMediumType: 'Select Medium:',
        valveInletPressure: 'Inlet Pressure (bar.a):',
        valveOutletPressure: 'Outlet Pressure (bar.a):',
        valveFluidTemperature: 'Temperature (℃):',
        valvePressureDrop: 'Pressure Drop',
        valveWaterKv: 'Water Kv Value (m3/h)',
        valveGasKv: 'Gas Kv Value (m3/h)',
        valveSubcritical: 'Subcritical P2>1/2P1',
        valveSupercritical: 'Supercritical P2<1/2P1',
        valveKvExplanation: 'Kv Flow Coefficient [m3/h]',
        valveQNExplanation: 'QN Gas flow at standard conditions [m3/h]',
        valveP1Explanation: 'P1 Valve inlet pressure [bar]',
        valveP2Explanation: 'P2 Valve outlet pressure [bar]',
        valveDeltaPExplanation: 'ΔP Pressure difference across valve P1-P2 [bar]',
        valveRhoExplanation: 'ρ Density [kg/m3]',
        valveRhoNExplanation: 'ρN Gas density at standard conditions [kg/m3]',
        valveT1Explanation: 'T1 Medium temperature [(273+t)K]',
        
        // Pipeline pressure loss calculation page
        pipelinePressureTitle: 'Pipeline Pressure Loss',
        gasCalculation: 'Gas Calculation',
        gasStdDensity: 'Medium Standard Density (kg/m3)',
        gasPressure: 'Medium Pressure (Pa)',
        gasTemperature: 'Medium Temperature (K)',
        gasFlowRate: 'Medium Flow Rate (NLPM)',
        mainPipeDiameter: 'Main Pipe Inner Diameter (mm)',
        stackCount: 'Stack Count',
        branchPipeDiameter: 'Branch Pipe Inner Diameter (mm)',
        gasViscosity: 'Medium Dynamic Viscosity (mm)',
        pipeRoughness: 'Pipe Wall Absolute Roughness',
        pipeLength: 'Pipe Length (m)',
        elbowCount: 'Elbow Count',
        teeCount: 'Tee Count',
        gasCalculationResults: 'Gas Calculation Results',
        gasDensityResult: 'Medium Density (kg/m3):',
        gasFlowRateM3sResult: 'Medium Flow Rate (m3/s):',
        mainPipeAreaResult: 'Main Pipe Area (m2):',
        mainPipeVelocityResult: 'Main Pipe Velocity (m/s):',
        branchPipeAreaResult: 'Branch Pipe Area (m2):',
        branchPipeVelocityResult: 'Branch Pipe Velocity (m/s):',
        reynoldsNumberResult: 'Reynolds Number:',
        frictionCoefficientResult: 'Friction Coefficient:',
        pipeResistanceResult: 'Pipe Resistance:',
        elbowFrictionCoefficientResult: 'Elbow Friction Coefficient:',
        teeFrictionCoefficientResult: 'Tee Friction Coefficient:',
        elbowResistanceResult: 'Elbow Resistance (kPa):',
        teeResistanceResult: 'Tee Resistance (kPa):',
        localResistanceResult: 'Local Resistance (kPa):',
        systemResistanceResult: 'System Resistance (kPa):',
        waterCalculation: 'Water Calculation',
        coolantDensityWater: 'Coolant Density (kg/m3)',
        waterFlowRate: 'Medium Flow Rate (NLPM)',
        waterMainPipeDiameter: 'Main Pipe Inner Diameter (mm)',
        waterStackCount: 'Stack Count',
        waterBranchPipeDiameter: 'Branch Pipe Inner Diameter (mm)',
        waterViscosity: 'Medium Dynamic Viscosity (mm)',
        waterPipeRoughness: 'Pipe Wall Absolute Roughness',
        waterPipeLength: 'Pipe Length (m)',
        waterElbowCount: 'Elbow Count',
        waterTeeCount: 'Tee Count',
        waterCalculationResults: 'Water Calculation Results',
        waterFlowRateM3sResult: 'Medium Flow Rate (m3/s):',
        waterMainPipeAreaResult: 'Main Pipe Area (m2):',
        waterMainPipeVelocityResult: 'Main Pipe Velocity (m/s):',
        waterBranchPipeAreaResult: 'Branch Pipe Area (m2):',
        waterBranchPipeVelocityResult: 'Branch Pipe Velocity (m/s):',
        waterReynoldsNumberResult: 'Reynolds Number:',
        waterFrictionCoefficientResult: 'Friction Coefficient:',
        waterPipeResistanceResult: 'Pipe Resistance (kPa):',
        waterElbowFrictionCoefficientResult: 'Elbow Friction Coefficient:',
        waterTeeFrictionCoefficientResult: 'Tee Friction Coefficient:',
        waterElbowResistanceResult: 'Elbow Resistance (kPa):',
        waterTeeResistanceResult: 'Tee Resistance (kPa):',
        waterLocalResistanceResult: 'Local Resistance (kPa):',
        waterSystemResistanceResult: 'System Resistance (kPa):',
        
        // Heat exchanger/intercooler page
        heatExchangerTitle: 'Heat Exchanger/Intercooler',
        radiatorCalc: 'Radiator Calculation',
        intercoolerCalc: 'Intercooler Calculation',
        coolantHeatRatio: 'Coolant Heat Ratio ξ',
        airTempDifference: 'Cooling Air Temperature Difference (℃)',
        radiatorKa: 'Radiator Heat Transfer Coefficient Ka W/(m2·℃)',
        fanCount: 'Fan Count',
        fanAreaRatio: 'Fan Area/Radiator Area Ratio α',
        fanDiameter: 'Single Fan Impeller Diameter (mm)',
        coolantTempDiff: 'Coolant Temperature Difference (℃)',
        intercoolerKa: 'Intercooler Heat Transfer Coefficient Ka W/(m2·℃)',
        radiatorCalcResults: 'Radiator Calculation Results',
        intercoolerCalcResults: 'Intercooler Calculation Results',
        radiatorSystemTotalHeatLoad: 'System Total Heat Load (kW)',
        radiatorAmbientTemp: 'Ambient Temperature (℃)',
        radiatorOutletAirTemp: 'Cooling Air Outlet Temperature (℃)',
        radiatorCoolantDensity: 'Coolant Density (kg/m3)',
        radiatorCoolantSpecificHeat: 'Coolant Specific Heat (kJ/(kg·K))',
        radiatorCoolantInletTemp: 'Coolant Inlet Temperature (℃)',
        radiatorCoolantOutletTemp: 'Coolant Outlet Temperature (℃)',
        radiatorCoolantFlow: 'Coolant Circulation Flow (L/min)',
        radiatorLogMeanTempCorrection: 'Cross-flow LMTD Correction Factor εΔt',
        requiredHeatDissipationArea: 'Required Heat Dissipation Area (m2)',
        radiatorFrontalArea: 'Radiator Frontal Area (m2)',
        requiredCoolingAirFlow: 'Required Cooling Air Flow (m3/h)',
        singleFanAirFlow: 'Single Fan Air Flow Requirement (m3/h)',
        intercoolerHeatLoad1: 'Intercooler Heat Load (kW)',
        pressurizedAirInletTemp: 'Pressurized Air Inlet Temperature (℃)',
        pressurizedAirOutletTemp: 'Pressurized Air Outlet Temperature (℃)',
        intercoolerCoolantInletTemp: 'Coolant Inlet Temperature (℃)',
        intercoolerCoolantOutletTemp: 'Coolant Outlet Temperature (℃)',
        pressurizedAirFlow: 'Pressurized Air Flow (L/min)',
        intercoolerCoolantFlow: 'Coolant Flow (L/min)',
        intercoolerLogMeanTempCorrection: 'Cross-flow LMTD Correction Factor εΔt',
        intercoolerRequiredArea: 'Required Heat Dissipation Area (m2)',
        
        // Fuel cell hybrid system page
        hybridSystemTitle: 'Fuel Cell Hybrid System',
        vehicleParamsTitle: 'Vehicle Parameters',
        vehicleMass: 'Loaded Mass (Kg)',
        range: 'Driving Range (Km)',
        rollingResistance: 'Rolling Resistance Coefficient f',
        
        // Fuel cell hybrid system page references
        references: 'References',
        hybridSystemReference1: 'Wang Ke. Design of Fuel Cell Hybrid Power System[D]. [Master\'s Thesis]. Chengdu: Southwest Jiaotong University.',
        hybridSystemReference2: 'Zhao Chunpeng. Research on Fuel Cell Vehicle Hybrid Power System Design[D]. [Master\'s Thesis]. Zhejiang: Zhejiang University.',
        hybridSystemReference3: 'Chen Hao. Optimization Management of Fuel Cell/Lithium Battery Hybrid Power System[D]. [Doctoral Dissertation]. Zhejiang: Zhejiang University.',
        hybridSystemReference4: 'Ding Chenguang. Research on Energy Management Strategy of Hydrogen Fuel Cell Hybrid Power System[D]. [Master\'s Thesis]. Chengdu: University of Electronic Science and Technology of China.',
        hybridSystemReference5: 'Zhang Xinxin. Research on Fuel Cell Hybrid Electric Vehicle Control Based on Deep Q-Learning[D]. [Master\'s Thesis]. Chongqing: Chongqing Jiaotong University.',
        dragCoefficient: 'Drag Coefficient Cd',
        maxSpeed: 'Maximum Speed (km/h)',
        maxGradeability: 'Maximum Gradeability (%)',
        gradeabilitySpeed: 'Gradeability Speed (km/h)',
        accelerationEndSpeed: 'Acceleration End Speed (km/h)',
        accelerationTime: 'Acceleration Time (s)',
        frontalArea: 'Frontal Area (m2)',
        powertrainEfficiency: 'Powertrain Efficiency η',
        rotatingMassCoefficient: 'Rotating Mass Coefficient δ',
        finalDriveRatio: 'Final Drive Ratio iο',
        lowGearRatio: 'Low Gear Ratio ig',
        highGearRatio: 'High Gear Ratio ig',
        tireRadius: 'Tire Radius (m)',
        accessoryPower: 'Accessory Power (kW)',
        motorEfficiency: 'Motor & Controller Efficiency η',
        batteryEfficiency: 'Battery Efficiency η',
        hydrogenBottlePressure: 'Hydrogen Bottle Pressure (MPa)',
        hydrogenBottleVolume: 'Hydrogen Bottle Volume (L)',
        pemCellVoltage: 'Rated PEM Cell Voltage (V)',
        hydrogenPrice: 'Hydrogen Price (yuan/kg)',
        maxClimbingAngle: 'Maximum Climbing Angle (θ)',
        acceleration: 'Acceleration (m/s2)',
        maxSpeedPower: 'Pmax1_Maximum Speed Power (kW)',
        maxGradeabilityPower: 'Pmax2_Maximum Gradeability Power (kW)',
        maxAccelerationPower: 'Pmax3_Maximum Acceleration Power (kW)',
        motorPeakPower: 'Motor Peak Power (kW)',
        motorRatedPower: 'Motor Rated Power (kW)',
        motorPeakRPM: 'Motor Peak RPM (r/min)',
        motorRatedRPM: 'Motor Rated RPM (r/min)',
        fuelCellRequiredPower: 'Fuel Cell Required Power (kW)',
        ratedConditionHydrogenConsumption: 'Rated H2 Consumption (g/s)',
        requiredHydrogenMass: 'Required H2 Mass (Kg)',
        singleBottleHydrogenMass: 'Single Bottle H2 Mass (Kg)',
        requiredBottleCount: 'Required Bottle Count (n)',
        batteryRequiredPower: 'Battery Required Power (kW)',
        rated100kmHydrogenConsumption: 'Rated 100km H2 Consumption (kg/100km)',
        rated100kmHydrogenPrice: 'Rated 100km H2 Price (yuan/100km)',
        
        // Dynamic performance page
        dynamicPerformanceTitle: 'Dynamic Performance (beta)',
        
        // COG Humidifier
        cogHumidifier: 'COG Humidifier',
        
        // Utility tools
        'tools.sumTool': 'Sum Tool',
        'tools.velocityTool': 'Flow Velocity Conversion',
        'tools.sumInputPlaceholder': 'Enter numbers separated by commas or newlines',
        'tools.sumButton': 'Sum',
        'tools.clearButton': 'Clear',
        'tools.result': 'Result: ',
        'tools.flowRate': 'Flow Rate (SLPM):',
        'tools.pipeDiameter': 'Pipe Diameter (mm):',
        'tools.calculateVelocity': 'Calculate Velocity',
        'tools.velocity': 'Velocity: ',
        'tools.area': 'Area: ',
        
        // Prompt messages
        loginRequired: 'Login required to access',
        processingData: 'Processing...',
        exportSuccess: 'Export successful',
        importSuccess: 'Import successful',
        calculationComplete: 'Calculation complete',
        
        // Heat exchanger/intercooler page note
        heatExchangerNote: 'Note: Radiator calculation only needs to reach the required heat dissipation area and number of fans. The air volume of a single fan and the windward area of the radiator need to consider both the efficiency and diameter of the selected fan. The intercooler only needs to calculate the heat dissipation area and coolant flow rate. Ka--Radiator overall heat transfer coefficient, traditional engine radiators are generally 104-143W/(m2·℃), fuel cells are low-temperature heat dissipation, take a lower value, take 115 W/(m2·℃).',
        
        // Program instructions dialog
        programInstructions: 'Program Instructions',
        instruction1: '1. The first page is for absolute pressure calculation, with parameters mostly based on current density and cell count;',
        instruction2: '2. This program can calculate self-humidifying stacks by keeping the humidifier input at zero;',
        instruction3: '3. Design inputs can be saved and imported for different stacks and operating points;',
        instruction4: '4. The altitude in the second page air thermal calculation only affects compressor power consumption, not the first page absolute pressure calculation;',
        instruction5: '5. Multiple windows can be opened simultaneously for result comparison.',
        
        // Footer and About Us/Contact Us
        copyright: '© 2025 Fuel Cell Calculator. All rights reserved.',
        aboutUs: 'About Us',
        contactUs: 'Contact Us',
        aboutUsTitle: 'About Us',
        aboutUsContent: 'Fuel Cell Calculator is a professional fuel cell calculation tool designed to provide accurate calculation services for engineers and researchers. Thanks to Mr. Cheng for his support and proofreading work in software development.',
        contactUsTitle: 'Contact Us',
        contactUsContent: 'If you have any questions or suggestions, please contact us through the following methods:',
        contactEmail: 'Email: 363383119@qq.com',
        
        // Login/Register Modal
        loginTitle: 'Login',
        registerTitle: 'Register',
        emailLabel: 'Email:',
        passwordLabel: 'Password:',
        confirmPasswordLabel: 'Confirm Password:',
        loginButton: 'Login',
        registerButton: 'Register',
        noAccountText: 'Don\'t have an account?',
        registerNowLink: 'Register Now',
        hasAccountText: 'Already have an account?',
        loginNowLink: 'Login Now',
        
        // Version Log Modal
        versionLogTitle: 'Version Update Log',
        version221Title: 'V2.21 Updates',
        version221Item1: 'Added rated 100km hydrogen consumption and price on page 7',
        version221Item2: 'Added forced humidification ambient humidity setting issue on page 1',
        version221Item3: 'Fixed bugs',
        version221Item4: 'Added 3 language switching options for more users',
        version221Item5: 'Open sourced code to Github repository',
        version220Title: 'V2.20 Updates',
        version220Item1: 'Added dynamic performance (beta) module',
        version220Item2: 'Added reference content',
        version220Item3: 'Continuous upgrades in progress',
        version212Title: 'V2.12 Updates',
        version212Item1: 'Fixed errors in hybrid system calculations',
        version212Item2: 'Optimized accuracy of radiator and intercooler calculations',
        version212Item3: 'Updated cross-flow logarithmic temperature difference correction coefficient formula',
        version212Item4: 'Added formula hover function for result items, making it easier to understand calculation principles★★★',
        version212Item5: 'Improved page response speed and user experience',
        version211Title: 'V2.11 Updates',
        version211Item1: 'Added hybrid system calculation page',
        version211Item2: 'Optimized utility tools functionality',
        version211Item3: 'Fixed bugs in pipeline pressure loss calculations',
        version211Item4: 'Improved overall system stability',
        version210Title: 'V2.10 Updates',
        version210Item1: 'Brand new interface design, improved user experience',
        version210Item2: 'Added multiple calculation modules',
        version210Item3: 'Optimized data import/export functionality',
        version210Item4: 'Fixed known issues',
        
        // Hover formula translations
        formulaStackCurrent: 'Stack Current(A) = Reaction Area(cm²) * Current Density(A/cm²)',
        formulaStackVoltage: 'Stack Voltage(V) = Cell Voltage(V) * Cell Count',
        formulaStackPower: 'Stack Power(kW) = (Stack Current * Stack Voltage) / 1000',
        formulaTheoreticalHydrogenConsumption: 'Theoretical H2 Consumption(mol/s) = (Reaction Area * Current Density * Cell Count) / (96485 * 2)',
        formulaTheoreticalOxygenConsumption: 'Theoretical O2 Consumption(mol/s) = Theoretical H2 Consumption / 2',
        formulaTheoreticalWaterProduction: 'Theoretical Water Production(mol/s) = Theoretical H2 Consumption',
        formulaActualHydrogenFlow: 'Actual H2 Flow(mol/s) = Theoretical H2 Consumption * H2 Stoichiometry',
        formulaActualAirFlow: 'Actual Air Flow(mol/s) = (Theoretical H2 Consumption / 2) * Air Stoichiometry / 0.21',
        formulaActualHydrogenFlowNLPM: 'Actual H2 Flow(NLPM) = Actual H2 Flow(mol/s) * 22.4 * 60',
        formulaActualAirFlowNLPM: 'Actual Air Flow(NLPM) = Actual Air Flow(mol/s) * 22.4 * 60',
        formulaReactionHeat: 'Reaction Heat(LHV-kW) = Stack Power * (1.254 - Cell Voltage) / Cell Voltage',
        formulaStackEfficiency: 'Stack Efficiency(%) = (Cell Voltage / 1.254) * 100',
        formulaSystemHydrogenConsumption: 'System H2 Consumption(mol/s) = Theoretical H2 Consumption * 100 / H2 Utilization',
        formulaSystemHydrogenSupplyNLPM: 'System H2 Supply(NLPM) = System H2 Consumption * 22.4 * 60',
        formulaHydrogenExhaust: 'H2 Exhaust(NLPM) = System H2 Supply * (1 - H2 Utilization/100)',
        formulaHydrogenRecirculation: 'H2 Recirculation(mol/s) = Theoretical H2 Consumption * (H2 Excess Ratio - 1)',
        formulaHydrogenRecirculationNLPM: 'H2 Recirculation(NLPM) = H2 Recirculation(mol/s) * 22.4 * 60',
        formulaAnodeOutletWater: 'Anode Outlet Water(mol/s) = Theoretical H2 Consumption * Water Distribution Coefficient + Stack Water Inlet',
        formulaAnodeOutletTemp: 'Anode Outlet Temperature(℃) = Operating Temperature',
        formulaSaturatedVaporPressure: 'Saturated Vapor Pressure(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367 (T=Temperature)',
        formulaAnodeOutletPressure: 'Anode Outlet Pressure(kPa) = Anode Inlet Pressure - Anode Pressure Loss',
        formulaAnodeOutletHumidity: 'Anode Outlet Humidity(%) = Anode Outlet Pressure*(Anode Outlet Water/(Anode Outlet Water+H2 Recirculation))/Saturated Vapor Pressure*100',
        formulaAnodeLiquidWater: 'Anode Liquid Water(mol/s) = When humidity>100%, Anode Outlet Water - H2 Recirculation*Saturated Vapor Pressure/(Anode Outlet Pressure-Saturated Vapor Pressure), otherwise 0',
        formulaAnodeCondensationHeat: 'Anode Condensation Heat(kW) = Anode Liquid Water*18*2258/1000 (18=water molar mass, 2258=latent heat)',
        formulaOutletGaseousWater: 'Outlet Gaseous Water(mol/s) = Anode Outlet Water - Anode Liquid Water',
        formulaAnodeInletHydrogenTemp: 'Anode Inlet H2 Temperature(℃) = Anode Inlet Temperature',
        formulaInletHydrogenHumidity: 'Inlet H2 Humidity(%) = Outlet Gaseous Water/(Outlet Gaseous Water+System H2 Supply+H2 Recirculation)*Anode Inlet Pressure/Saturated Vapor Pressure*100',
        formulaInletStackWater: 'Stack Water Inlet(mol/s) = Anode Liquid Water*(1-Gas-Liquid Separator Efficiency/100) + Outlet Gaseous Water',
        formulaWaterDistributionCoefficient: 'Water Distribution Coefficient(Anode) = Water Distribution Coefficient Setting',
        formulaSystemAirSupply: 'System Air Supply(mol/s) = Actual Air Flow(mol/s)',
        formulaSystemAirSupplyNLPM: 'System Air Supply(NLPM) = Actual Air Flow(NLPM)',
        formulaAirPumpInletTemp: 'Air Pump Inlet Temperature(℃) = Ambient Temperature',
        formulaOutletAirFlow: 'Outlet Air Flow(mol/s) = Actual Air Flow - Theoretical H2 Consumption/2',
        formulaOutletAirFlowNLPM: 'Outlet Air Flow(NLPM) = Outlet Air Flow*22.4*60',
        formulaCathodeOutletWater: 'Cathode Outlet Water(mol/s) = Theoretical Water Production*(1-Water Distribution Coefficient) + Ambient Water Intake + Dry Gas Humidification Water',
        formulaCathodeOutletTemp: 'Cathode Outlet Temperature(℃) = Operating Temperature',
        formulaCathodeOutletPressure: 'Cathode Outlet Pressure(kPa) = Cathode Inlet Pressure - Cathode Pressure Loss',
        formulaAirOutletHumidity: 'Air Outlet Humidity(%) = Cathode Outlet Pressure*(Cathode Outlet Water/(Cathode Outlet Water+Outlet Air Flow))/Saturated Vapor Pressure*100',
        formulaOutletLiquidWater: 'Outlet Liquid Water(mol/s) = When humidity>100%, Cathode Outlet Water - Outlet Air Flow*Saturated Vapor Pressure/(Cathode Outlet Pressure-Saturated Vapor Pressure), otherwise 0',
        formulaCondensationHeat: 'Condensation Heat(kW) = Outlet Liquid Water*18*2258/1000 (18=water molar mass, 2258=latent heat)',
        formulaOutletWaterVaporPressure: 'Outlet Water Vapor Pressure(Theoretical)(kPa) = Cathode Outlet Pressure*(Cathode Outlet Water/(Cathode Outlet Water+Outlet Air Flow))',
        formulaOutletWaterVaporPressure1: 'Outlet Water Vapor Pressure(Actual)(kPa) = When humidity>100%, Saturated Vapor Pressure, otherwise theoretical value',
        formulaOutletDewPointTemp: 'Outlet Dew Point Temperature(℃) = 1657.46/(7.07406-log10(Outlet Water Vapor Pressure)) - 227.02',
        formulaIntercoolerOutletTemp: 'Intercooler Outlet Temperature(℃) = Operating Temperature - Temperature Difference/2',
        formulaAmbientSaturatedVaporPressure: 'Ambient Saturated Vapor Pressure(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367 (T=Ambient Temperature)',
        formulaAmbientWaterIntake: 'Ambient Water Intake(mol/s) = Humidity*Ambient Saturated Vapor Pressure*Actual Air Flow/101/100',
        formulaCoolantDensity: 'Coolant Density(kg/m3) = Ethylene Glycol Ratio*1.7657 + 981.43 (Ethylene Glycol Solution)',
        formulaCoolantSpecificHeat: 'Coolant Specific Heat(kJ/(kg·K)) = -0.0002*Ethylene Glycol Ratio^2 - 0.004*Ethylene Glycol Ratio + 4.2',
        formulaReactionHeat1: 'Reaction Heat(LHV-kW) = Stack Power*(1.254-Cell Voltage)/Cell Voltage',
        formulaSuperSaturatedWaterCondensationHeat: 'Super Saturated Water Condensation Heat(kW) = Condensation Heat + Anode Condensation Heat',
        formulaIntercoolerHeatLoad: 'Intercooler Heat Load(kW) = 1.005*(System Air Supply*28.96/1000)*(Compressor Outlet Temperature-Intercooler Outlet Temperature)',
        formulaSystemTotalHeatLoad: 'System Total Heat Load(kW) = Intercooler Heat Load + Super Saturated Water Condensation Heat + Reaction Heat',
        formulaStackCoolantFlow: 'Stack Coolant Flow(L/min) = System Total Heat Load/Temperature Difference/Coolant Density/Coolant Specific Heat*1000*60',
        formulaDryGasHumidificationWater: 'Dry Gas Humidification Water(mol/s) = (Cathode Outlet Water - Outlet Liquid Water)*Humidifier Efficiency/100',
        formulaHumidifierDrySidePressure: 'Dry Side Outlet Pressure(kPa) = Cathode Inlet Pressure',
        formulaHumidifierDrySideTemp: 'Dry Side Outlet Temperature(℃) = (Intercooler Outlet Temperature + Operating Temperature - Temperature Difference)/2',
        formulaHumidifierDrySideSaturatedVaporPressure: 'Dry Side Outlet Saturated Vapor Pressure(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367 (T=Temperature)',
        formulaHumidifierDrySideHumidity: 'Dry Side Outlet Humidity(%) = Dry Gas Humidification Water/Actual Air Flow*Humidifier Dry Side Outlet Pressure/Dry Side Outlet Saturated Vapor Pressure*100',
        formulaHumidifierWetSidePressure: 'Wet Side Outlet Pressure(kPa) = Cathode Outlet Pressure - Humidifier Wet Side Pressure Loss',
        formulaHumidifierWetSideTemp: 'Wet Side Outlet Temperature(℃) = Humidifier Dry Side Outlet Temperature',
        formulaHumidifierWetSideWater: 'Wet Side Outlet Water(mol/s) = Cathode Outlet Water - Outlet Liquid Water - Dry Gas Humidification Water',
        formulaHumidifierWetSideSaturatedVaporPressure: 'Wet Side Outlet Saturated Vapor Pressure(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367 (T=Temperature)',
        formulaHumidifierWetSideHumidity: 'Wet Side Outlet Humidity(%) = Wet Side Outlet Water/Outlet Air Flow*Wet Side Outlet Pressure/Wet Side Outlet Saturated Vapor Pressure*100',
        formulaPressureAtHeight: 'Pressure at Height h(Pa) = When altitude>11000m, 22631.8*exp((11000-altitude)/6340); otherwise, 101325*(1-altitude/44330)^5.25588',
        formulaDensityAtHeight: 'Density at Height h(kg/m3) = When altitude>11000m, 0.3639*exp((11000-altitude)/6340); otherwise, 1.225*(1-altitude/44330)^4.25588',
        formulaTemperatureKAtHeight: 'Temperature at Height h(K) = When altitude>11000m, 216.65; otherwise, 288.15-0.0065*altitude',
        formulaTemperatureCAtHeight: 'Temperature at Height h(℃) = temperatureKAtHeight - 273.15',
        formulaAirInletVolumeFlow: 'Air Inlet Volume Flow(m^3/s) = airFlowRate / 1000 / 60',
        formulaAirInletMassFlow: 'Air Inlet Mass Flow(g/s) = airInletVolumeFlow * densityAtHeight * 1000',
        formulaOutletAirPressure: 'Outlet Air Pressure(Pa) = inletPressure * 100000 * (1 - intercoolerPressureLoss/100)',
        formulaCompressorPressureRatio: 'Compressor Pressure Ratio(ε) = outletAirPressure / inletAirPressure',
        formulaOutletAirTempK: 'Outlet Air Temperature(K) = inletAirTemperature * (1 + ((outletAirPressure/inletAirPressure)^0.286-1)/compressorEfficiency)',
        formulaOutletAirTempC: 'Outlet Air Temperature(℃) = outletAirTempK - 273.15',
        formulaAirTempRise: 'Air Temperature Rise(K) = outletAirTempK - inletAirTemperature',
        formulaIsentropicCompressionWork: 'Isentropic Compression Work(W) = k/(k-1)*p1*V1*[1-(p2/p1)^((k-1)/k)]',
        formulaCompressorPowerConsumption: 'Compressor Power Consumption(W) = Air Inlet Mass Flow × Air Specific Heat × Air Temperature Rise',
        formulaValveKvValue: 'Water: Kv(m3/h) = Q*sqrt(ρ/(1000*ΔP)); Gas subcritical: Kv = QN/514*sqrt(T1*ρN/(P2*ΔP)); Gas supercritical: Kv = QN/(257*P1)*sqrt(T1*ρN)',
        formulaValveDNValue: 'DN(mm) = -77.861*Kv^6+256.11*Kv^5-331.17*Kv^4+215.74*Kv^3-77.502*Kv^2+20.183*Kv+0.476',
        formulaGasDensityResult: 'Medium Density(kg/m3) = Standard Density*273.15/Medium Temperature*Medium Pressure/101325',
        formulaGasFlowRateM3sResult: 'Medium Flow Rate(m3/s) = Medium Flow Rate(NLPM)/1000/60*101325/Medium Pressure*Medium Temperature/273.15',
        formulaMainPipeAreaResult: 'Main Pipe Area(m2) = 0.25*3.14159*Main Pipe Inner Diameter^2/1000000',
        formulaMainPipeVelocityResult: 'Main Pipe Velocity(m/s) = Medium Flow Rate/Main Pipe Area',
        formulaBranchPipeAreaResult: 'Branch Pipe Area(m2) = 0.25*3.14159*Branch Pipe Inner Diameter^2/1000000',
        formulaBranchPipeVelocityResult: 'Branch Pipe Velocity(m/s) = Medium Flow Rate/Stack Count/Branch Pipe Area',
        formulaReynoldsNumberResult: 'Reynolds Number = Medium Density*Main Pipe Velocity*Main Pipe Inner Diameter/Medium Dynamic Viscosity/1000',
        formulaFrictionCoefficientResult: 'Friction Coefficient = (-0.5 / math.log10(Pipe Wall Absolute Roughness/3.7/Main Pipe Inner Diameter))^2',
        formulaPipeResistanceResult: 'Pipe Resistance = Friction Coefficient*Pipe Length/Main Pipe Inner Diameter*Medium Density*Main Pipe Velocity^2/2',
        formulaElbowFrictionCoefficientResult: 'Elbow Friction Coefficient = 30*Friction Coefficient',
        formulaTeeFrictionCoefficientResult: 'Tee Friction Coefficient = 60*Friction Coefficient',
        formulaElbowResistanceResult: 'Elbow Resistance(kPa) = Elbow Count*0.5*Elbow Friction Coefficient*Medium Density*Main Pipe Velocity^2/1000',
        formulaTeeResistanceResult: 'Tee Resistance(kPa) = Tee Count*0.5*Tee Friction Coefficient*Medium Density*Main Pipe Velocity^2/1000',
        formulaLocalResistanceResult: 'Local Resistance(kPa) = Elbow Resistance+Tee Resistance',
        formulaSystemResistanceResult: 'System Resistance(kPa) = Pipe Resistance+Local Resistance',
        formulaWaterFlowRateM3sResult: 'Medium Flow Rate(m3/s) = Medium Flow Rate(NLPM)/1000/60',
        formulaWaterMainPipeAreaResult: 'Main Pipe Area(m2) = 0.25*3.14159*Main Pipe Inner Diameter^2/1000000',
        formulaWaterMainPipeVelocityResult: 'Main Pipe Velocity(m/s) = Medium Flow Rate/Main Pipe Area',
        formulaWaterBranchPipeAreaResult: 'Branch Pipe Area(m2) = 0.25*3.14159*Branch Pipe Inner Diameter^2/1000000',
        formulaWaterBranchPipeVelocityResult: 'Branch Pipe Velocity(m/s) = Medium Flow Rate/Stack Count/Branch Pipe Area',
        formulaWaterReynoldsNumberResult: 'Reynolds Number = Coolant Density*Main Pipe Velocity*Main Pipe Inner Diameter/Medium Dynamic Viscosity/1000',
        formulaWaterFrictionCoefficientResult: 'Friction Coefficient = (-0.5 / math.log10(Pipe Wall Absolute Roughness/3.7/Main Pipe Inner Diameter))^2',
        formulaWaterPipeResistanceResult: 'Pipe Resistance(kPa) = Friction Coefficient*Pipe Length/Main Pipe Inner Diameter*Coolant Density*Main Pipe Velocity^2/2',
        formulaWaterElbowFrictionCoefficientResult: 'Elbow Friction Coefficient = 30*Friction Coefficient',
        formulaWaterTeeFrictionCoefficientResult: 'Tee Friction Coefficient = 60*Friction Coefficient',
        formulaWaterElbowResistanceResult: 'Elbow Resistance(kPa) = Elbow Count*0.5*Elbow Friction Coefficient*Coolant Density*Main Pipe Velocity^2/1000',
        formulaWaterTeeResistanceResult: 'Tee Resistance(kPa) = Tee Count*0.5*Tee Friction Coefficient*Coolant Density*Main Pipe Velocity^2/1000',
        formulaWaterLocalResistanceResult: 'Local Resistance(kPa) = Elbow Resistance+Tee Resistance',
        formulaWaterSystemResistanceResult: 'System Resistance(kPa) = Pipe Resistance+Local Resistance'
    },
    
    'ja': {
        // ページタイトルとナビゲーション
        pageTitle: '燃料電池計算機 V2.21',
        tabSystemDesign: 'システム設計計算',
        tabAirThermal: '空気熱力計算',
        tabHydrogenValue: '水素発熱量と電力量',
        tabValveFlow: 'バルブ流体計算',
        tabPipelinePressure: '配管圧力損失',
        tabHeatExchanger: '熱交換器/インタークーラー',
        tabHybridSystem: '燃料電池ハイブリッドシステム',
        tabDynamicPerformance: '動的性能（ベータ版）',
        tabTools: '実用ツール',
        
        // sliderValueDisplay 多语言翻译键
        sliderCurrentDensity: '電流密度',
        sliderCellVoltage: 'セル電圧',
        sliderStackCurrent: 'スタック電流',
        sliderStackPower: 'スタック出力',
        sliderSystemHeatLoad: 'システム総熱負荷',
        sliderCoolantFlow: 'スタック冷却液流量',
        sliderHydrogenRatio: '水素量論比',
        sliderAirRatio: '空気量論比',
        sliderAnodePressure: 'アノード入口圧力',
        sliderCathodePressure: 'カソード入口圧力',
        sliderTempDiff: '動作温度差',
        
        // 图表相关多语言翻译键
        chartTitle: '燃料電池動的性能曲線',
        chartVoltageLabel: '電流密度-セル電圧関係 (V)',
        chartCurrentLabel: '電流密度-スタック電流関係 (A)',
        chartPowerLabel: '電流密度-スタック出力関係 (kW)',
        chartHeatLoadLabel: '電流密度-システム総熱負荷関係 (kW)',
        chartCoolantFlowLabel: '電流密度-スタック冷却液流量関係 (L/min)',
        chartTooltipStackCurrent: 'スタック電流',
        chartTooltipCellCount: 'セル数',
        chartTooltipReactionArea: '反応面積',
        chartTooltipHydrogenRatio: '水素量論比',
        chartTooltipAirRatio: '空気量論比',
        chartTooltipAnodePressure: 'アノード入口圧力',
        chartTooltipCathodePressure: 'カソード入口圧力',
        chartTooltipTempDiff: '動作温度差',
        chartXAxisTitle: '電流密度 (A/cm²)',
        chartYAxisTitle: 'セル電圧 (V)',
        chartY1AxisTitle: 'スタック出力 (kW)',
        chartY2AxisTitle: 'スタック電流 (A)',
        
        // ボタンテキスト
        btnExport: '入力をエクスポート',
        btnImport: '入力をインポート',
        btnDownload: 'オフライン版をダウンロード',
        btnLogin: 'ログイン',
        btnLogout: 'ログアウト',
        btnViewProfile: 'プロフィール表示',
        btnGithub: 'ソースコードを表示',
        btnVersionLog: 'バージョンログを表示',
        btnCalculate: '計算',
        btnClear: 'クリア',
        btnSum: '合計',
        
        // 言語セレクター
        languageSwitch: '言語切り替え',
        currentLanguage: '日本語',
        
        // システム設計計算ページ
        stackDesignTitle: 'スタック基本設計パラメータ',
        
        // 入力ラベル
        cellVoltage: 'セル電圧 (V)',
        cellCount: 'セル数',
        reactionArea: '反応面積 (cm2)',
        currentDensity: '電流密度 (A/cm2)',
        airRatio: '空気量論比',
        hydrogenRatio: '水素量論比',
        operatingTemp: '動作温度 (℃)',
        ambientTemp: '環境温度 (℃)',
        tempDifference: '温度差 (℃)',
        humidity: '環境湿度 (%)',
        hydrogenUtilization: '水素利用率 (%)',
        anodeInletPressure: 'アノード入口圧力 (kPa)',
        cathodeInletPressure: 'カソード入口圧力 (kPa)',
        anodePressureLoss: 'アノード圧力損失 (kPa)',
        cathodePressureLoss: 'カソード圧力損失 (kPa)',
        coolingPressureLoss: '冷却圧力損失 (kPa)',
        waterDistribution: 'アノード水分配',
        anodeInletTemp: 'アノード入口温度 (℃)',
        gasSeparatorEfficiency: 'ガス分離効率 (%)',
        intercoolerPressureLoss: 'インタークーラー圧力損失 (kPa)',
        compressorOutletTemp: 'コンプレッサー出口温度 (℃)',
        glycolPercentage: 'グリコール割合 (%)',
        humidifierEfficiency: '加湿器効率 (%)',
        humidifierDryLoss: '加湿器ドライサイド損失 (kPa)',
        humidifierWetLoss: '加湿器ウェットサイド損失 (kPa)',
        
        // 結果ラベル
        resultStackCalc: 'スタック計算',
        resultHydrogenSystem: '水素サブシステム',
        resultAirSystem: '空気サブシステム',
        resultHeatSystem: '熱交換サブシステム',
        
        stackCurrent: 'スタック電流 (A)',
        stackVoltage: 'スタック電圧 (V)',
        stackPower: 'スタック出力 (kW)',
        theoreticalHydrogenConsumption: '理論水素消費量 (mol/s)',
        theoreticalOxygenConsumption: '理論酸素消費量 (mol/s)',
        theoreticalWaterProduction: '理論水生成量 (mol/s)',
        actualHydrogenFlow: '実際のH2入口流量 (mol/s)',
        actualAirFlow: '実際の空気入口流量 (mol/s)',
        actualHydrogenFlowNLPM: '実際のH2入口流量 (NLPM)',
        actualAirFlowNLPM: '実際の空気入口流量 (NLPM)',
        reactionHeat: '反応熱 (LHV-kW)',
        stackEfficiency: 'スタック効率 (%)',
        
        // 水素サブシステム結果ラベル
        systemHydrogenConsumption: 'システム水素消費量 (mol/s)',
        systemHydrogenSupplyNLPM: 'システム水素供給量 (NLPM)',
        hydrogenExhaust: '水素排気 (NLPM)',
        hydrogenRecirculation: '出口水素循環量 (mol/s)',
        hydrogenRecirculationNLPM: '出口水素循環量 (NLPM)',
        anodeOutletWater: 'アノード出口水量 (mol/s)',
        anodeOutletTemp: 'アノード出口温度 (℃)',
        saturatedVaporPressure: '飽和蒸気圧 (kPa)',
        anodeOutletPressure: 'アノード出口圧力 (kPa)',
        anodeOutletHumidity: 'アノード出口湿度 (%)',
        anodeLiquidWater: 'アノード液体水量 (mol/s)',
        anodeCondensationHeat: 'アノード凝縮熱 (kW)',
        outletGaseousWater: '出口気体水量 (mol/s)',
        anodeInletHydrogenTemp: 'アノード入口水素温度 (℃)',
        saturatedVaporPressure1: '飽和蒸気圧 (kPa)',
        inletHydrogenHumidity: '入口水素湿度 (%)',
        inletStackWater: 'スタック入口水量 (mol/s)',
        waterDistributionCoefficient: '水分布係数 (アノード)',
        
        // 空気サブシステム結果ラベル
        systemAirSupply: 'システム空気供給量 (mol/s)',
        systemAirSupplyNLPM: 'システム空気供給量 (NLPM)',
        airPumpInletTemp: 'エアポンプ入口温度 (℃)',
        outletAirFlow: '出口空気流量 (mol/s)',
        outletAirFlowNLPM: '出口空気流量 (NLPM)',
        cathodeOutletWater: 'カソード出口水量 (mol/s)',
        cathodeOutletWaterTooltip: '加湿器を使用するシステムでは環境湿度(%)を0に設定する必要があります',
        cathodeOutletTemp: 'カソード出口温度 (℃)',
        saturatedVaporPressure2: '飽和蒸気圧 (kPa)',
        cathodeOutletPressure: 'カソード出口圧力 (kPa)',
        airOutletHumidity: '空気出口湿度 (%)',
        outletLiquidWater: '出口液体水量 (mol/s)',
        condensationHeat: '凝縮熱 (kW)',
        outletWaterVaporPressure: '出口水蒸気分圧 (理論値) (kPa)',
        outletWaterVaporPressure1: '出口水蒸気分圧 (実際値) (kPa)',
        outletDewPointTemp: '出口露点温度 (℃)',
        intercoolerOutletTemp: 'インタークーラー出口温度 (℃)',
        ambientSaturatedVaporPressure: '環境飽和蒸気圧 (kPa)',
        ambientWaterIntake: '環境からの水分取込 (mol/s)',
        
        // 熱交換サブシステム結果ラベル
        coolantDensity: '冷却液密度 (kg/m3)',
        coolantSpecificHeat: '冷却液比熱 (kJ/(kg·K))',
        reactionHeat1: '反応発熱量 (LHV-kW)',
        superSaturatedWaterCondensationHeat: '過飽和水凝縮放熱量 (kW)',
        intercoolerHeatLoad: 'インタークーラー熱負荷 (kW)',
        systemTotalHeatLoad: 'システム総熱負荷 (kW)',
        stackCoolantFlow: 'システム冷却液流量 (L/min)',
        
        // COG加湿器結果ラベル
        dryGasHumidificationWater: 'ドライガス加湿用水量 (mol/s)',
        humidifierDrySidePressure: '加湿器ドライサイド圧力 (kPa)',
        humidifierDrySideTemp: '加湿器ドライサイド温度 (℃)',
        humidifierDrySideSaturatedVaporPressure: '加湿器ドライサイド飽和蒸気圧 (kPa)',
        humidifierDrySideHumidity: '加湿器ドライサイド湿度 (%)',
        humidifierWetSidePressure: '加湿器ウェットサイド圧力 (kPa)',
        humidifierWetSideTemp: '加湿器ウェットサイド温度 (℃)',
        humidifierWetSideWater: '加湿器ウェットサイド水量 (mol/s)',
        humidifierWetSideSaturatedVaporPressure: '加湿器ウェットサイド飽和蒸気圧 (kPa)',
        humidifierWetSideHumidity: '加湿器ウェットサイド湿度 (%)',
        
        // 空気熱力計算ページ
        airThermalTitle: '空気熱力計算パラメータ',
        airThermalResults: '空気熱力計算結果',
        airThermalFormulas: '温度上昇、等エントロピー圧縮軸仕事、消費電力計算式',
        airThermalNote: '注：流量データは第1ページと連動、圧力は絶対圧力、単位はPa。海抜高度30000メートルまで計算可能。',
        airGasConstant: '空気ガス定数 J/(kg*K):',
        airSpecificHeat: '空気定圧比熱 kJ/(kg·K):',
        airSpecificHeatRatio: '空気比熱比(κ):',
        altitude: '所在地海抜(m):',
        airPumpEfficiency: '空気ポンプ効率(%):',
        pressureAtHeight: '高度hでの圧力(Pa)：',
        densityAtHeight: '高度hでの密度(kg/m3)：',
        temperatureKAtHeight: '高度hでの温度(K)：',
        temperatureCAtHeight: '高度hでの温度(℃)：',
        airInletVolumeFlow: '空気入口体積流量(m^3/s)：',
        airInletMassFlow: '空気入口質量流量(g/s)：',
        outletAirPressure: '出口空気圧力(Pa)：',
        compressorPressureRatio: '空気圧縮機圧力比(ε)：',
        outletAirTempK: '出口空気温度(K)：',
        outletAirTempC: '出口空気温度(℃)：',
        airTempRise: '空気温度上昇(K)：',
        isentropicCompressionWork: '等エントロピー圧縮軸仕事(W)：',
        compressorPowerConsumption: '空気圧縮機消費電力(W)：',
        references: '参考文献',
        airThermalReference1: '航空機環境制御[M]. 北京: 北京航空航天大学出版社, 2004。',
        airDensity: '空気密度 (kg/m3)',
        airViscosity: '空気動粘度 (Pa·s)',
        airThermalConductivity: '空気熱伝導率 (W/(m·K))',
        airPrandtlNumber: '空気プラントル数',
        compressorPower: 'コンプレッサー消費電力 (kW)',
        compressorEfficiency: 'コンプレッサー効率 (%)',
        
        // 水素発熱量ページ
        hydrogenValueTitle: '水素発熱量と電力量',
        hydrogenLowHeatMol: '1モル水素低位発熱値、kJ/mol（気体水）',
        hydrogenHighHeatMol: '1モル水素高位発熱値、kJ/mol（液体水）',
        hydrogenLowHeatGram: '1グラム水素低位発熱値、J/g（気体水）',
        hydrogenHighHeatGram: '1グラム水素高位発熱値、J/g（液体水）',
        electricityEnergy: '1度電力対応エネルギー、J',
        hydrogenLowElectricity: '1kg水素低位発熱値対応電力量、kWh',
        hydrogenHighElectricity: '1kg水素高位発熱値対応電力量、kWh',
        reactionEnthalpy: '反応エンタルピー',
        reactionEnthalpyDesc1: '反応エンタルピーは燃料の熱ポテンシャルで、燃料から抽出できる最大エネルギーを表す。その中で、燃焼に関連するエンタルピー変化を燃焼エンタルピーと呼び、記号∆Hrxnまたは∆hrxn（モル反応燃焼エンタルピーを表す）で表す。',
        reactionEnthalpyDesc2: '水素燃焼を例にすると、水素燃焼により水を生成する過程で外部に伝達される最大エネルギーが水素の燃焼エンタルピーである。',
        reactionEnthalpyDesc3: 'その中で、生成物が気体水の∆Hrxnは水素燃焼の低位発熱値LHV、生成物が液体水の∆Hrxnは水素燃焼の高位発熱値HHVであり、LHVとHHVの差は液体水の気化潜熱である。',
        
        // バルブ流体計算ページ
        valveFlowTitle: 'バルブ流体計算',
        flowRate: '流量 (NLPM)',
        inletPressure: '入口圧力 (bar.a)',
        outletPressure: '出口圧力 (bar.a)',
        temperature: '温度 (℃)',
        mediumSelect: '媒体選択',
        hydrogen: '水素',
        air: '空気',
        nitrogen: '窒素',
        oxygen: '酸素',
        argon: 'アルゴン',
        helium: 'ヘリウム',
        carbonDioxide: '二酸化炭素',
        methane: 'メタン',
        
        // 媒体選択翻訳キー
        mediumHydrogen: '水素',
        mediumAir: '空気',
        mediumNitrogen: '窒素',
        mediumWater: '水',
        mediumEthylene: 'エチレン',
        mediumMethane: 'メタン',
        mediumOxygen: '酸素',
        mediumCO2: '二酸化炭素',
        mediumHelium: 'ヘリウム',
        mediumBenzene: 'ベンゼン',
        mediumEthanol: 'エタノール',
        mediumChlorine: '塩素',
        mediumFreon: 'フロン',
        mediumAmmonia: 'アンモニア',
        mediumChloroform: 'クロロホルム',
        mediumSteam: '蒸気（100℃）',
        density: '密度',
        valveFlowResults: 'バルブ流体計算結果',
        kvValue: 'Kv値',
        valveFlowFormula: '計算式',
        valveFlowFormulaDesc: 'Kv = Q × √(ρ / ΔP)',
        valveFlowNote: '注：Kv値計算範囲は現在0.012~1.0をサポートしています。',
        valveFlowReference: '参考文献',
        valveKvValue: 'Kv(m3/h)：',
        valveDNValue: 'DN(mm)：',
        valveFormulas: '計算式',
        valveSelectedDensity: '選択媒体の密度: 1.225 kg/m³',
        valveNote: '注：Kv値計算範囲は現在0.012~1.0をサポートしています。',
        valveReference: '計算理論根拠：Burkert公式サイトの流体計算データフィッティング。',
        valveType: 'バルブタイプ',
        valveDiameter: 'バルブ直径 (mm)',
        flowCoefficient: '流量係数 Cv',
        fluidDensity: '流体密度 (kg/m3)',
        fluidViscosity: '流体粘度 (Pa·s)',
        valveFlowRate: 'バルブ流量 (L/min)',
        pressureDrop: '圧力降下 (kPa)',
        reynoldsNumber: 'レイノルズ数',
        valveMediumType: '媒体選択:',
        valveInletPressure: '入口圧力 (bar.a):',
        valveOutletPressure: '出口圧力 (bar.a):',
        valveFluidTemperature: '温度 (℃):',
        valvePressureDrop: '圧力降下',
        valveWaterKv: '水のKv値 (m3/h)',
        valveGasKv: 'ガスのKv値 (m3/h)',
        valveSubcritical: '亜臨界 P2>1/2P1',
        valveSupercritical: '超臨界 P2<1/2P1',
        valveKvExplanation: 'Kv 流量係数 [m3/h]',
        valveQNExplanation: 'QN 標準状態でのガス流量 [m3/h]',
        valveP1Explanation: 'P1 バルブ入口圧力 [bar]',
        valveP2Explanation: 'P2 バルブ出口圧力 [bar]',
        valveDeltaPExplanation: 'ΔP バルブ両端圧力差 P1-P2 [bar]',
        valveRhoExplanation: 'ρ 密度 [kg/m3]',
        valveRhoNExplanation: 'ρN 標準状態でのガス密度 [kg/m3]',
        valveT1Explanation: 'T1 媒体温度 [(273+t)K]',
        
        // 配管圧力損失ページ
        pipelinePressureTitle: '配管圧力損失',
        gasCalculation: 'ガス計算',
        gasStdDensity: '媒体標準密度 (kg/m3)',
        gasPressure: '媒体圧力 (Pa)',
        gasTemperature: '媒体温度 (K)',
        gasFlowRate: '媒体流量 (NLPM)',
        mainPipeDiameter: '主配管内径 (mm)',
        stackCount: 'スタック数',
        branchPipeDiameter: '分岐配管内径 (mm)',
        gasViscosity: '媒体動粘度 (mm)',
        pipeRoughness: '配管壁絶対粗さ',
        pipeLength: '配管長さ (m)',
        elbowCount: 'エルボ数',
        teeCount: 'ティー数',
        gasCalculationResults: 'ガス計算結果',
        gasDensityResult: '媒体密度 (kg/m3):',
        gasFlowRateM3sResult: '媒体流量 (m3/s):',
        mainPipeAreaResult: '主配管面積 (m2):',
        mainPipeVelocityResult: '主配管流速 (m/s):',
        branchPipeAreaResult: '分岐配管面積 (m2):',
        branchPipeVelocityResult: '分岐配管流速 (m/s):',
        reynoldsNumberResult: 'レイノルズ数:',
        frictionCoefficientResult: '摩擦係数:',
        pipeResistanceResult: '配管抵抗:',
        elbowFrictionCoefficientResult: 'エルボ摩擦係数:',
        teeFrictionCoefficientResult: 'ティー摩擦係数:',
        elbowResistanceResult: 'エルボ抵抗 (kPa):',
        teeResistanceResult: 'ティー抵抗 (kPa):',
        localResistanceResult: '局所抵抗 (kPa):',
        systemResistanceResult: 'システム抵抗 (kPa):',
        waterCalculation: '水計算',
        coolantDensityWater: '冷却液密度 (kg/m3)',
        waterFlowRate: '媒体流量 (NLPM)',
        waterMainPipeDiameter: '主配管内径 (mm)',
        waterStackCount: 'スタック数',
        waterBranchPipeDiameter: '分岐配管内径 (mm)',
        waterViscosity: '媒体動粘度 (mm)',
        waterPipeRoughness: '配管壁絶対粗さ',
        waterPipeLength: '配管長さ (m)',
        waterElbowCount: 'エルボ数',
        waterTeeCount: 'ティー数',
        waterCalculationResults: '水計算結果',
        waterFlowRateM3sResult: '媒体流量 (m3/s):',
        waterMainPipeAreaResult: '主配管面積 (m2):',
        waterMainPipeVelocityResult: '主配管流速 (m/s):',
        waterBranchPipeAreaResult: '分岐配管面積 (m2):',
        waterBranchPipeVelocityResult: '分岐配管流速 (m/s):',
        waterReynoldsNumberResult: 'レイノルズ数:',
        waterFrictionCoefficientResult: '摩擦係数:',
        waterPipeResistanceResult: '配管抵抗 (kPa):',
        waterElbowFrictionCoefficientResult: 'エルボ摩擦係数:',
        waterTeeFrictionCoefficientResult: 'ティー摩擦係数:',
        waterElbowResistanceResult: 'エルボ抵抗 (kPa):',
        waterTeeResistanceResult: 'ティー抵抗 (kPa):',
        waterLocalResistanceResult: '局所抵抗 (kPa):',
        waterSystemResistanceResult: 'システム抵抗 (kPa):',
        
        // 熱交換器/インタークーラーページ
        heatExchangerTitle: '熱交換器/インタークーラー',
        radiatorCalc: 'ラジエーター計算',
        intercoolerCalc: 'インタークーラー計算',
        coolantHeatRatio: '冷却液熱除去比 ξ',
        airTempDifference: '冷却空気温度差 (℃)',
        radiatorKa: 'ラジエーター総熱伝達係数 Ka W/(m2·℃)',
        fanCount: 'ファン数',
        fanAreaRatio: 'ファン面積/ラジエーター面積比 α',
        fanDiameter: '単一ファンインペラー直径 (mm)',
        coolantTempDiff: '冷却液温度差 (℃)',
        intercoolerKa: 'インタークーラー総熱伝達係数 Ka W/(m2·℃)',
        radiatorCalcResults: 'ラジエーター計算結果',
        intercoolerCalcResults: 'インタークーラー計算結果',
        
        // 動的性能分析ページ
        dynamicPerformanceTitle: '動的性能分析（ベータ）',
        currentDensityHeader: '電流密度(A/cm²)',
        cellVoltageHeader: 'セル電圧(V)',
        hydrogenRatioHeader: '水素計量比',
        airRatioHeader: '空気計量比',
        anodeInletPressureHeader: 'アノード入口圧力(kPa)',
        cathodeInletPressureHeader: 'カソード入口圧力(kPa)',
        operatingTempDiffHeader: '動作温度差(℃)',
        processDataButton: 'データ処理',
        clearDataButton: 'データクリア',
        dynamicPerformanceChart: '動的性能曲線',
        currentPosition: '現在位置: 0',
        dataPasteAreaPlaceholder: 'Excelからデータをコピーしてここに貼り付けてください（1行に1つのデータペア、タブまたはスペースで区切り）',
        radiatorSystemTotalHeatLoad: 'システム総熱負荷 (kW)',
        radiatorAmbientTemp: '環境温度 (℃)',
        radiatorOutletAirTemp: '冷却空気出口温度 (℃)',
        radiatorCoolantDensity: '冷却液密度 (kg/m3)',
        radiatorCoolantSpecificHeat: '冷却液比熱 (kJ/(kg·K))',
        radiatorCoolantInletTemp: '冷却液入口温度 (℃)',
        radiatorCoolantOutletTemp: '冷却液出口温度 (℃)',
        radiatorCoolantFlow: '冷却循環流量 (L/min)',
        radiatorLogMeanTempCorrection: '対数平均温度差修正係数 εΔt',
        requiredHeatDissipationArea: '必要放熱面積 (m2)',
        radiatorFrontalArea: 'ラジエーター正面面積 (m2)',
        requiredCoolingAirFlow: '必要冷却空気流量 (m3/h)',
        singleFanAirFlow: '単一ファン風量要求 (m3/h)',
        intercoolerHeatLoad1: 'インタークーラー熱負荷 (kW)',
        pressurizedAirInletTemp: '加圧空気入口温度 (℃)',
        pressurizedAirOutletTemp: '加圧空気出口温度 (℃)',
        intercoolerCoolantInletTemp: '冷却液入口温度 (℃)',
        intercoolerCoolantOutletTemp: '冷却液出口温度 (℃)',
        pressurizedAirFlow: '加圧空気流量 (L/min)',
        intercoolerCoolantFlow: '冷却液流量 (L/min)',
        intercoolerLogMeanTempCorrection: '対数平均温度差修正係数 εΔt',
        intercoolerRequiredArea: '必要放熱面積 (m2)',
        
        // COG加湿器
        cogHumidifier: 'COG加湿器',
        
        // 燃料電池ハイブリッドシステムページ
        hybridSystemTitle: '燃料電池ハイブリッドシステム',
        vehicleParamsTitle: '車両パラメータ',
        vehicleMass: '満載質量 (Kg)',
        range: '航続距離 (Km)',
        rollingResistance: '転がり抵抗係数 f',
        
        // 燃料電池ハイブリッドシステムページ参考文献
        references: '参考文献',
        hybridSystemReference1: '王珂. 燃料電池ハイブリッドパワーシステム設計[D]. [修士論文]. 成都: 西南交通大学.',
        hybridSystemReference2: '趙春鵬. 燃料電池車ハイブリッドパワーシステム設計研究[D]. [修士論文]. 浙江: 浙江大学.',
        hybridSystemReference3: '陳浩. 燃料電池/リチウム電池ハイブリッドパワーシステム最適化管理[D]. [博士論文]. 浙江: 浙江大学.',
        hybridSystemReference4: '丁晨光. 水素燃料電池ハイブリッドパワーシステムエネルギー管理戦略研究[D]. [修士論文]. 成都: 電子科技大学.',
        hybridSystemReference5: '張鑫新. 深層Q学習に基づく燃料電池ハイブリッド電気自動車制御研究[D]. [修士論文]. 重慶: 重慶交通大学.',
        dragCoefficient: '空気抵抗係数 Cd',
        maxSpeed: '最高速度 (km/h)',
        maxGradeability: '最大登坂能力 (%)',
        gradeabilitySpeed: '登坂速度 (km/h)',
        accelerationEndSpeed: '加速終了速度 (km/h)',
        accelerationTime: '加速時間 (s)',
        frontalArea: '前面面積 (m2)',
        powertrainEfficiency: 'パワートレイン効率 η',
        rotatingMassCoefficient: '回転質量係数 δ',
        finalDriveRatio: 'ファイナルドライブ比 iο',
        lowGearRatio: '低速ギア比 ig',
        highGearRatio: '高速ギア比 ig',
        tireRadius: 'タイヤ半径 (m)',
        accessoryPower: '補機電力 (kW)',
        motorEfficiency: 'モーター・コントローラー効率 η',
        batteryEfficiency: 'バッテリー効率 η',
        hydrogenBottlePressure: '水素ボトル圧力 (MPa)',
        hydrogenBottleVolume: '水素ボトル容積 (L)',
        pemCellVoltage: '定格PEMセル電圧 (V)',
        hydrogenPrice: '水素価格 (円/kg)',
        maxClimbingAngle: '最大登坂角 (θ)',
        acceleration: '加速度 (m/s2)',
        maxSpeedPower: 'Pmax1_最高速度電力 (kW)',
        maxGradeabilityPower: 'Pmax2_最大登坂電力 (kW)',
        maxAccelerationPower: 'Pmax3_最大加速電力 (kW)',
        motorPeakPower: 'モーターピーク電力 (kW)',
        motorRatedPower: 'モーター定格電力 (kW)',
        motorPeakRPM: 'モーターピークRPM (r/min)',
        motorRatedRPM: 'モーター定格RPM (r/min)',
        fuelCellRequiredPower: '燃料電池必要電力 (kW)',
        ratedConditionHydrogenConsumption: '定格水素消費量 (g/s)',
        requiredHydrogenMass: '必要水素質量 (Kg)',
        singleBottleHydrogenMass: '単一ボトル水素質量 (Kg)',
        requiredBottleCount: '必要ボトル数 (n)',
        batteryRequiredPower: 'バッテリー必要電力 (kW)',
        rated100kmHydrogenConsumption: '定格100km水素消費量 (kg/100km)',
        rated100kmHydrogenPrice: '定格100km水素価格 (円/100km)',
        
        // 動的性能ページ
        dynamicPerformanceTitle: '動的性能（beta）',
        
        // 実用小工具
        'tools.sumTool': '合計ツール',
        'tools.velocityTool': '流速変換',
        'tools.sumInputPlaceholder': 'カンマまたは改行で区切って数字を入力',
        'tools.sumButton': '合計',
        'tools.clearButton': 'クリア',
        'tools.result': '結果: ',
        'tools.flowRate': '流量 (SLPM):',
        'tools.pipeDiameter': 'パイプ直径 (mm):',
        'tools.calculateVelocity': '流速計算',
        'tools.velocity': '流速: ',
        'tools.area': '面積: ',
        
        // プロンプトメッセージ
        loginRequired: 'アクセスするにはログインが必要です',
        processingData: '処理中...',
        exportSuccess: 'エクスポート成功',
        importSuccess: 'インポート成功',
        calculationComplete: '計算完了',
        
        // 第六页换热器/中冷器计算页面注释
        heatExchangerNote: '注：ラジエーター計算は必要な放熱面積とファン数まで計算すれば十分です。単一ファンの風量およびラジエーターの迎風面積は、選択したファンの効率と直径を同時に考慮する必要があります。インタークーラーは放熱面積と冷却液流量まで計算すれば十分です。Ka--ラジエーター総熱伝達係数、従来のエンジンラジエーターは一般的に104-143W/(m2·℃)、燃料電池は低温放熱のため、より低い値を取り、115 W/(m2·℃)を取ります。',
        
        // 程序说明对话框
        programInstructions: 'プログラム説明',
        instruction1: '1、第1ページは絶対圧計算で、計算パラメータは主に電流密度とセル数に基づいています；',
        instruction2: '2、このプログラムは自己加湿スタックを計算でき、加湿器入力をゼロに保つだけです；',
        instruction3: '3、設計入力は異なるスタックと動作点に応じて保存・インポートできます；',
        instruction4: '4、第2ページの空気熱力計算の高度は圧縮機の消費電力にのみ影響し、第1ページの絶対圧計算には影響しません；',
        instruction5: '5、複数のウィンドウを同時に開いて結果を比較できます。',
        
        // Footer and About Us/Contact Us
        copyright: '© 2025 燃料電池計算機。全著作権所有。',
        aboutUs: '私たちについて',
        contactUs: 'お問い合わせ',
        aboutUsTitle: '私たちについて',
        aboutUsContent: '燃料電池計算機は、エンジニアや研究者に正確な計算サービスを提供することを目的とした専門的な燃料電池計算ツールです。ソフトウェア開発における支援と校正作業に対して、程先生に感謝いたします。',
        contactUsTitle: 'お問い合わせ',
        contactUsContent: 'ご質問やご提案がございましたら、以下の方法でお問い合わせください：',
        contactEmail: 'メール: 363383119@qq.com',
        
        // Login/Register Modal
        loginTitle: 'ログイン',
        registerTitle: '登録',
        emailLabel: 'メール:',
        passwordLabel: 'パスワード:',
        confirmPasswordLabel: 'パスワード確認:',
        loginButton: 'ログイン',
        registerButton: '登録',
        noAccountText: 'アカウントをお持ちでない方は',
        registerNowLink: '今すぐ登録',
        hasAccountText: 'すでにアカウントをお持ちの方は',
        loginNowLink: '今すぐログイン',
        
        // Version Log Modal
        versionLogTitle: 'バージョン更新ログ',
        version221Title: 'V2.21 更新内容',
        version221Item1: '第7ページに定格100km水素消費量と価格を追加',
        version221Item2: '第1ページに強制加湿環境湿度設定問題を追加',
        version221Item3: 'バグ修正',
        version221Item4: '3つの言語切り替え機能を追加し、より多くのユーザーが利用可能に',
        version221Item5: 'Githubリポジトリにソースコードをオープンソース化',
        version220Title: 'V2.20 更新内容',
        version220Item1: '動的性能（ベータ）モジュールを追加',
        version220Item2: '参考文献内容を追加',
        version220Item3: '継続的にアップグレード中',
        version212Title: 'V2.12 更新内容',
        version212Item1: 'ハイブリッドシステム計算のエラーを修正',
        version212Item2: 'ラジエーターとインタークーラー計算の精度を最適化',
        version212Item3: '対流対数温度差補正係数の計算式を更新',
        version212Item4: '結果項の数式ホバー機能を追加、計算原理の理解を容易に★★★',
        version212Item5: 'ページ応答速度とユーザー体験を向上',
        version211Title: 'V2.11 更新内容',
        version211Item1: 'ハイブリッドシステム計算ページを追加',
        version211Item2: 'ユーティリティツール機能を最適化',
        version211Item3: 'パイプライン圧力損失計算のバグを修正',
        version211Item4: 'システム全体の安定性を向上',
        version210Title: 'V2.10 更新内容',
        version210Item1: '全く新しいインターフェースデザイン、ユーザー体験を向上',
        version210Item2: '複数の計算モジュールを追加',
        version210Item3: 'データインポート/エクスポート機能を最適化',
        version210Item4: '既知の問題を修正'
    },
    
    'ko': {
        // 페이지 제목 및 내비게이션
        pageTitle: '연료전지 계산기 V2.21',
        tabSystemDesign: '시스템 설계 계산',
        tabAirThermal: '공기 열역학 계산',
        tabHydrogenValue: '수소 발열량 및 전력량',
        tabValveFlow: '밸브 유체 계산',
        tabPipelinePressure: '배관 압력 손실',
        tabHeatExchanger: '열교환기/인터쿨러',
        tabHybridSystem: '연료전지 하이브리드 시스템',
        tabDynamicPerformance: '동적 성능 (베타)',
        tabTools: '실용 도구',
        
        // 버튼 텍스트
        btnExport: '입력 내보내기',
        btnImport: '입력 가져오기',
        btnDownload: '오프라인 버전 다운로드',
        btnLogin: '로그인',
        btnLogout: '로그아웃',
        btnViewProfile: '프로필 보기',
        btnGithub: '소스 코드 보기',
        btnVersionLog: '버전 로그 보기',
        btnCalculate: '계산',
        btnClear: '지우기',
        btnSum: '합계',
        
        // 언어 선택기
        languageSwitch: '언어 전환',
        currentLanguage: '한국어',
        
        // 시스템 설계 계산 페이지
        stackDesignTitle: '스택 기본 설계 매개변수',
        
        // 입력 라벨
        cellVoltage: '셀 전압 (V)',
        cellCount: '셀 수',
        reactionArea: '반응 면적 (cm2)',
        currentDensity: '전류 밀도 (A/cm2)',
        airRatio: '공기 화학량론비',
        hydrogenRatio: '수소 화학량론비',
        operatingTemp: '작동 온도 (℃)',
        ambientTemp: '환경 온도 (℃)',
        tempDifference: '온도 차이 (℃)',
        humidity: '환경 습도 (%)',
        hydrogenUtilization: '수소 이용률 (%)',
        anodeInletPressure: '양극 입구 압력 (kPa)',
        
        // 호버 공식 번역 - 전지 스택
        formulaStackCurrent: '스택 전류(A) = 반응 면적(cm²) × 전류 밀도(A/cm²)',
        formulaStackVoltage: '스택 전압(V) = 셀 전압(V) × 스택 셀 수',
        formulaStackPower: '스택 전력(kW) = (스택 전류 × 스택 전압) / 1000',
        formulaTheoreticalHydrogenConsumption: '이론적 반응 수소 소비량(mol/s) = (반응 면적 × 전류 밀도 × 스택 셀 수) / (96485 × 2)',
        formulaActualHydrogenConsumption: '실제 수소 소비량(mol/s) = 이론적 반응 수소 소비량 / 수소 이용률',
        formulaActualHydrogenMassFlow: '실제 수소 질량 유량(g/s) = 실제 수소 소비량 × 2.016',
        formulaActualHydrogenVolumeFlow: '실제 수소 체적 유량(SLPM) = 실제 수소 소비량 × 22.4 × 60 / 1000',
        formulaTheoreticalOxygenConsumption: '이론적 반응 산소 소비량(mol/s) = (반응 면적 × 전류 밀도 × 스택 셀 수) / (96485 × 4)',
        formulaActualOxygenConsumption: '실제 산소 소비량(mol/s) = 이론적 반응 산소 소비량 / 공기 화학량론비',
        formulaActualAirConsumption: '실제 공기 소비량(mol/s) = 실제 산소 소비량 / 0.21',
        formulaActualAirMassFlow: '실제 공기 질량 유량(g/s) = 실제 공기 소비량 × 28.97',
        formulaActualAirVolumeFlow: '실제 공기 체적 유량(SLPM) = 실제 공기 소비량 × 22.4 × 60 / 1000',
        
        // 호버 공식 번역 - 수소 서브시스템
        formulaHydrogenSubsystemPressureDrop: '수소 서브시스템 압력 강하(kPa) = 양극 입구 압력 - 양극 출구 압력',
        formulaHydrogenSubsystemOutletPressure: '수소 서브시스템 출구 압력(kPa) = 양극 입구 압력 - 수소 서브시스템 압력 강하',
        
        // 호버 공식 번역 - 공기 서브시스템
        formulaAirSubsystemPressureDrop: '공기 서브시스템 압력 강하(kPa) = 음극 입구 압력 - 음극 출구 압력',
        formulaAirSubsystemOutletPressure: '공기 서브시스템 출구 압력(kPa) = 음극 입구 압력 - 공기 서브시스템 압력 강하',
        
        // 호버 공식 번역 - 열교환 서브시스템
        formulaHeatExchangeSubsystemHeatLoad: '열교환 서브시스템 열 부하(kW) = 스택 전류 × (1.48 - 셀 전압) × 스택 셀 수 / 1000',
        formulaHeatExchangeSubsystemCoolantFlow: '열교환 서브시스템 냉각수 유량(L/min) = 열교환 서브시스템 열 부하 × 1000 / (4.18 × 온도 차이) / 60',
        
        // 호버 공식 번역 - 밸브 유체 계산
        formulaValveFlowCoefficient: '밸브 유량 계수 Cv = 유량(SLPM) × √(밀도(kg/m³) / 압력 강하(kPa))',
        formulaValveFlowRate: '밸브 유량(SLPM) = Cv × √(압력 강하(kPa) / 밀도(kg/m³))',
        
        // 호버 공식 번역 - 배관 압력 손실 계산
        formulaPipelinePressureDrop: '배관 압력 손실(Pa) = λ × (L/D) × (ρ × v²) / 2',
        formulaPipelineReynoldsNumber: '레이놀즈 수 Re = ρ × v × D / μ',
        formulaPipelineFrictionFactor: '마찰 계수 λ = 64/Re (층류) 또는 0.3164/Re^0.25 (난류)',
        cathodeInletPressure: '음극 입구 압력 (kPa)',
        anodePressureLoss: '양극 압력 손실 (kPa)',
        cathodePressureLoss: '음극 압력 손실 (kPa)',
        coolingPressureLoss: '냉각 압력 손실 (kPa)',
        waterDistribution: '양극 물 분배',
        anodeInletTemp: '양극 입구 온도 (℃)',
        gasSeparatorEfficiency: '가스 분리 효율 (%)',
        intercoolerPressureLoss: '인터쿨러 압력 손실 (kPa)',
        compressorOutletTemp: '압축기 출구 온도 (℃)',
        glycolPercentage: '글리콜 비율 (%)',
        humidifierEfficiency: '가습기 효율 (%)',
        humidifierDryLoss: '가습기 건조측 손실 (kPa)',
        humidifierWetLoss: '가습기 습윤측 손실 (kPa)',
        
        // 결과 라벨
        resultStackCalc: '스택 계산',
        resultHydrogenSystem: '수소 서브시스템',
        resultAirSystem: '공기 서브시스템',
        resultHeatSystem: '열교환 서브시스템',
        
        stackCurrent: '스택 전류 (A)',
        stackVoltage: '스택 전압 (V)',
        stackPower: '스택 출력 (kW)',
        theoreticalHydrogenConsumption: '이론적 수소 소비량 (mol/s)',
        theoreticalOxygenConsumption: '이론적 산소 소비량 (mol/s)',
        theoreticalWaterProduction: '이론적 물 생성량 (mol/s)',
        actualHydrogenFlow: '실제 H2 입구 유량 (mol/s)',
        actualAirFlow: '실제 공기 입구 유량 (mol/s)',
        actualHydrogenFlowNLPM: '실제 H2 입구 유량 (NLPM)',
        actualAirFlowNLPM: '실제 공기 입구 유량 (NLPM)',
        reactionHeat: '반응열 (LHV-kW)',
        stackEfficiency: '스택 효율 (%)',
        
        // 수소 서브시스템 결과 라벨
        systemHydrogenConsumption: '시스템 수소 소비량 (mol/s)',
        systemHydrogenSupplyNLPM: '시스템 수소 공급량 (NLPM)',
        hydrogenExhaust: '수소 배기 (NLPM)',
        hydrogenRecirculation: '출구 수소 순환량 (mol/s)',
        hydrogenRecirculationNLPM: '출구 수소 순환량 (NLPM)',
        anodeOutletWater: '양극 출구 수량 (mol/s)',
        anodeOutletTemp: '양극 출구 온도 (℃)',
        saturatedVaporPressure: '포화 증기압 (kPa)',
        anodeOutletPressure: '양극 출구 압력 (kPa)',
        anodeOutletHumidity: '양극 출구 습도 (%)',
        anodeLiquidWater: '양극 액체 수량 (mol/s)',
        anodeCondensationHeat: '양극 응축열 (kW)',
        outletGaseousWater: '출구 기체 수량 (mol/s)',
        anodeInletHydrogenTemp: '양극 입구 수소 온도 (℃)',
        saturatedVaporPressure1: '포화 증기압 (kPa)',
        inletHydrogenHumidity: '입구 수소 습도 (%)',
        inletStackWater: '스택 입구 수량 (mol/s)',
        waterDistributionCoefficient: '수분 분포 계수 (양극)',
        
        // 공기 서브시스템 결과 라벨
        systemAirSupply: '시스템 공기 공급량 (mol/s)',
        systemAirSupplyNLPM: '시스템 공기 공급량 (NLPM)',
        airPumpInletTemp: '에어펌프 입구 온도 (℃)',
        outletAirFlow: '출구 공기 유량 (mol/s)',
        outletAirFlowNLPM: '출구 공기 유량 (NLPM)',
        cathodeOutletWater: '음극 출구 수량 (mol/s)',
        cathodeOutletWaterTooltip: '가습기가 있는 시스템은 환경 습도(%)를 0으로 설정해야 합니다',
        cathodeOutletTemp: '음극 출구 온도 (℃)',
        saturatedVaporPressure2: '포화 증기압 (kPa)',
        cathodeOutletPressure: '음극 출구 압력 (kPa)',
        airOutletHumidity: '공기 출구 습도 (%)',
        outletLiquidWater: '출구 액체 수량 (mol/s)',
        condensationHeat: '응축열 (kW)',
        outletWaterVaporPressure: '출구 수증기 분압 (이론값) (kPa)',
        outletWaterVaporPressure1: '출구 수증기 분압 (실제값) (kPa)',
        outletDewPointTemp: '출구 이슬점 온도 (℃)',
        intercoolerOutletTemp: '인터쿨러 출구 온도 (℃)',
        ambientSaturatedVaporPressure: '환경 포화 증기압 (kPa)',
        ambientWaterIntake: '환경으로부터 수분 흡입 (mol/s)',
        
        // 공기 열역학 계산 페이지
        airThermalTitle: '공기 열역학 계산 매개변수',
        airThermalResults: '공기 열역학 계산 결과',
        airThermalFormulas: '온도 상승, 등엔트로피 압축 축 일, 소비 전력 계산 공식',
        airThermalNote: '주의: 유량 데이터는 첫 번째 페이지와 연동, 압력은 절대 압력, 단위는 Pa. 해발 고도 30000미터까지 계산 가능.',
        airGasConstant: '공기 기체 상수 J/(kg*K):',
        airSpecificHeat: '공기 정압 비열 kJ/(kg·K):',
        airSpecificHeatRatio: '공기 비열비(κ):',
        altitude: '소재지 해발(m):',
        airPumpEfficiency: '공기 펌프 효율(%):',
        pressureAtHeight: '고도 h에서의 압력(Pa)：',
        densityAtHeight: '고도 h에서의 밀도(kg/m3)：',
        temperatureKAtHeight: '고도 h에서의 온도(K)：',
        temperatureCAtHeight: '고도 h에서의 온도(℃)：',
        airInletVolumeFlow: '공기 입구 체적 유량(m^3/s)：',
        airInletMassFlow: '공기 입구 질량 유량(g/s)：',
        outletAirPressure: '출구 공기 압력(Pa)：',
        compressorPressureRatio: '공기 압축기 압력비(ε)：',
        outletAirTempK: '출구 공기 온도(K)：',
        outletAirTempC: '출구 공기 온도(℃)：',
        airTempRise: '공기 온도 상승(K)：',
        isentropicCompressionWork: '등엔트로피 압축 축 일(W)：',
        compressorPowerConsumption: '공기 압축기 소비 전력(W)：',
        references: '참고 문헌',
        airThermalReference1: '항공기 환경 제어[M]. 베이징: 베이징 항공 항천 대학 출판사, 2004.',
        
        // 열교환 서브시스템 결과 라벨
        coolantDensity: '냉각액 밀도 (kg/m3)',
        coolantSpecificHeat: '냉각액 비열 (kJ/(kg·K))',
        reactionHeat1: '반응 발열량 (LHV-kW)',
        superSaturatedWaterCondensationHeat: '과포화 수분 응축 방열량 (kW)',
        intercoolerHeatLoad: '인터쿨러 열부하 (kW)',
        systemTotalHeatLoad: '시스템 총 열부하 (kW)',
        stackCoolantFlow: '시스템 냉각액 유량 (L/min)',
        
        // COG 가습기 결과 라벨
        dryGasHumidificationWater: '건조 가스 가습용 수량 (mol/s)',
        humidifierDrySidePressure: '가습기 건조측 압력 (kPa)',
        humidifierDrySideTemp: '가습기 건조측 온도 (℃)',
        humidifierDrySideSaturatedVaporPressure: '가습기 건조측 포화 증기압 (kPa)',
        humidifierDrySideHumidity: '가습기 건조측 습도 (%)',
        humidifierWetSidePressure: '가습기 습윤측 압력 (kPa)',
        humidifierWetSideTemp: '가습기 습윤측 온도 (℃)',
        humidifierWetSideWater: '가습기 습윤측 수량 (mol/s)',
        humidifierWetSideSaturatedVaporPressure: '가습기 습윤측 포화 증기압 (kPa)',
        humidifierWetSideHumidity: '가습기 습윤측 습도 (%)',
        
        // 공기 열역학 계산 페이지
        airThermalTitle: '공기 열역학 계산',
        altitude: '해발 고도 (m)',
        airDensity: '공기 밀도 (kg/m3)',
        airSpecificHeat: '공기 비열 (kJ/(kg·K))',
        airViscosity: '공기 동점성 (Pa·s)',
        airThermalConductivity: '공기 열전도율 (W/(m·K))',
        airPrandtlNumber: '공기 프란틀 수',
        compressorPower: '압축기 소비전력 (kW)',
        compressorEfficiency: '압축기 효율 (%)',
        
        // 수소 발열량 페이지
        hydrogenValueTitle: '수소 발열량 및 전력량',
        hydrogenLowHeatMol: '1몰 수소 저위발열값, kJ/mol (기체 물)',
        hydrogenHighHeatMol: '1몰 수소 고위발열값, kJ/mol (액체 물)',
        hydrogenLowHeatGram: '1그램 수소 저위발열값, J/g (기체 물)',
        hydrogenHighHeatGram: '1그램 수소 고위발열값, J/g (액체 물)',
        electricityEnergy: '1도 전력 대응 에너지, J',
        hydrogenLowElectricity: '1kg 수소 저위발열값 대응 전력량, kWh',
        hydrogenHighElectricity: '1kg 수소 고위발열값 대응 전력량, kWh',
        reactionEnthalpy: '반응 엔탈피',
        reactionEnthalpyDesc1: '반응 엔탈피는 연료의 열 잠재력으로, 연료에서 추출할 수 있는 최대 에너지를 나타낸다. 그 중 연소와 관련된 엔탈피 변화를 연소 엔탈피라고 하며, 기호 ∆Hrxn 또는 ∆hrxn(몰 반응 연소 엔탈피를 나타냄)으로 표시한다.',
        reactionEnthalpyDesc2: '수소 연소를 예로 들면, 수소 연소로 물을 생성하는 과정에서 외부로 전달되는 최대 에너지가 수소의 연소 엔탈피이다.',
        reactionEnthalpyDesc3: '그 중 생성물이 기체 물인 ∆Hrxn은 수소 연소의 저위발열값 LHV이고, 생성물이 액체 물인 ∆Hrxn은 수소 연소의 고위발열값 HHV이며, LHV와 HHV의 차이는 액체 물의 기화 잠열이다.',
        
        // 밸브 유체 계산 페이지
        valveFlowTitle: '밸브 유체 계산',
        flowRate: '유량 (NLPM)',
        inletPressure: '입구 압력 (bar.a)',
        outletPressure: '출구 압력 (bar.a)',
        temperature: '온도 (℃)',
        mediumSelect: '매체 선택',
        hydrogen: '수소',
        air: '공기',
        nitrogen: '질소',
        oxygen: '산소',
        argon: '아르곤',
        helium: '헬륨',
        carbonDioxide: '이산화탄소',
        methane: '메탄',
        
        // 매체 선택 번역 키
        mediumHydrogen: '수소',
        mediumAir: '공기',
        mediumNitrogen: '질소',
        mediumWater: '물',
        mediumEthylene: '에틸렌',
        mediumMethane: '메탄',
        mediumOxygen: '산소',
        mediumCO2: '이산화탄소',
        mediumHelium: '헬륨',
        mediumBenzene: '벤젠',
        mediumEthanol: '에탄올',
        mediumChlorine: '염소',
        mediumFreon: '프레온',
        mediumAmmonia: '암모니아',
        mediumChloroform: '클로로포름',
        mediumSteam: '증기（100℃）',
        density: '밀도',
        valveFlowResults: '밸브 유체 계산 결과',
        kvValue: 'Kv 값',
        valveFlowFormula: '계산 공식',
        valveFlowFormulaDesc: 'Kv = Q × √(ρ / ΔP)',
        valveFlowNote: '주의: Kv 값 계산 범위는 현재 0.012~1.0을 지원합니다.',
        valveFlowReference: '참고 문헌',
        valveKvValue: 'Kv(m3/h)：',
        valveDNValue: 'DN(mm)：',
        valveFormulas: '계산 공식',
        valveSelectedDensity: '선택된 매체의 밀도: 1.225 kg/m³',
        valveNote: '주의: Kv 값 계산 범위는 현재 0.012~1.0을 지원합니다.',
        valveReference: '계산 이론 근거: Burkert 공식 웹사이트 유체 계산 데이터 피팅.',
        valveType: '밸브 타입',
        valveDiameter: '밸브 직경 (mm)',
        flowCoefficient: '유량 계수 Cv',
        fluidDensity: '유체 밀도 (kg/m3)',
        fluidViscosity: '유체 점성 (Pa·s)',
        valveFlowRate: '밸브 유량 (L/min)',
        pressureDrop: '압력 강하 (kPa)',
        reynoldsNumber: '레이놀즈 수',
        valveMediumType: '매체 선택:',
        valveInletPressure: '입구 압력 (bar.a):',
        valveOutletPressure: '출구 압력 (bar.a):',
        valveFluidTemperature: '온도 (℃):',
        valvePressureDrop: '압력 강하',
        valveWaterKv: '물의 Kv값 (m3/h)',
        valveGasKv: '가스의 Kv값 (m3/h)',
        valveSubcritical: '아임계 P2>1/2P1',
        valveSupercritical: '초임계 P2<1/2P1',
        valveKvExplanation: 'Kv 유량 계수 [m3/h]',
        valveQNExplanation: 'QN 표준 상태에서의 가스 유량 [m3/h]',
        valveP1Explanation: 'P1 밸브 입구 압력 [bar]',
        valveP2Explanation: 'P2 밸브 출구 압력 [bar]',
        valveDeltaPExplanation: 'ΔP 밸브 양단 압력차 P1-P2 [bar]',
        valveRhoExplanation: 'ρ 밀도 [kg/m3]',
        valveRhoNExplanation: 'ρN 표준 상태에서의 가스 밀도 [kg/m3]',
        valveT1Explanation: 'T1 매체 온도 [(273+t)K]',
        
        // 배관 압력 손실 페이지
        pipelinePressureTitle: '배관 압력 손실',
        gasCalculation: '기체 계산',
        gasStdDensity: '매체 표준 밀도 (kg/m3)',
        gasPressure: '매체 압력 (Pa)',
        gasTemperature: '매체 온도 (K)',
        gasFlowRate: '매체 유량 (NLPM)',
        mainPipeDiameter: '주관 내경 (mm)',
        stackCount: '전지 스택 수 (N)',
        branchPipeDiameter: '분기 입구관 내경 (mm)',
        gasViscosity: '매체 동점성 (mm)',
        pipeRoughness: '관벽 절대 거칠기',
        pipeLength: '배관 길이 (m)',
        elbowCount: '엘보 수 (N)',
        teeCount: '티 수 (N)',
        gasCalculationResults: '기체 계산 결과',
        gasDensityResult: '매체 밀도 (kg/m3):',
        gasFlowRateM3sResult: '매체 유량 (m3/s):',
        mainPipeAreaResult: '주관 면적 (m2):',
        mainPipeVelocityResult: '주관 유속 (m/s):',
        branchPipeAreaResult: '분기 입구관 면적 (m2):',
        branchPipeVelocityResult: '분기 입구관 유속 (m/s):',
        reynoldsNumberResult: '레이놀즈 수:',
        frictionCoefficientResult: '마찰 계수:',
        pipeResistanceResult: '배관 저항:',
        elbowFrictionCoefficientResult: '엘보 마찰 계수:',
        teeFrictionCoefficientResult: '티 마찰 계수:',
        elbowResistanceResult: '엘보 저항 (kPa):',
        teeResistanceResult: '티 저항 (kPa):',
        localResistanceResult: '국소 저항 (kPa):',
        systemResistanceResult: '시스템 저항 (kPa):',
        waterCalculation: '수로 계산',
        coolantDensityWater: '냉각액 밀도 (kg/m3)',
        waterFlowRate: '매체 유량 (NLPM)',
        waterMainPipeDiameter: '주관 내경 (mm)',
        waterStackCount: '전지 스택 수 (N)',
        waterBranchPipeDiameter: '분기 입구관 내경 (mm)',
        waterViscosity: '매체 동점성 (mm)',
        waterPipeRoughness: '관벽 절대 거칠기',
        waterPipeLength: '배관 길이 (m)',
        waterElbowCount: '엘보 수 (N)',
        waterTeeCount: '티 수 (N)',
        waterCalculationResults: '수로 계산 결과',
        waterFlowRateM3sResult: '매체 유량 (m3/s):',
        waterMainPipeAreaResult: '주관 면적 (m2):',
        waterMainPipeVelocityResult: '주관 유속 (m/s):',
        waterBranchPipeAreaResult: '분기 입구관 면적 (m2):',
        waterBranchPipeVelocityResult: '분기 입구관 유속 (m/s):',
        waterReynoldsNumberResult: '레이놀즈 수:',
        waterFrictionCoefficientResult: '마찰 계수:',
        waterPipeResistanceResult: '배관 저항 (kPa):',
        waterElbowFrictionCoefficientResult: '엘보 마찰 계수:',
        waterTeeFrictionCoefficientResult: '티 마찰 계수:',
        waterElbowResistanceResult: '엘보 저항 (kPa):',
        waterTeeResistanceResult: '티 저항 (kPa):',
        waterLocalResistanceResult: '국소 저항 (kPa):',
        waterSystemResistanceResult: '시스템 저항 (kPa):',
        
        // 열교환기/인터쿨러 페이지
        heatExchangerTitle: '열교환기/인터쿨러',
        radiatorCalc: '라디에이터 계산',
        intercoolerCalc: '인터쿨러 계산',
        coolantHeatRatio: '냉각액 열제거비 ξ',
        airTempDifference: '냉각 공기 온도차 (℃)',
        radiatorKa: '라디에이터 총열전달계수 Ka W/(m2·℃)',
        fanCount: '팬 수',
        fanAreaRatio: '팬 면적/라디에이터 면적비 α',
        fanDiameter: '단일 팬 임펠러 직경 (mm)',
        coolantTempDiff: '냉각액 온도차 (℃)',
        intercoolerKa: '인터쿨러 총열전달계수 Ka W/(m2·℃)',
        radiatorCalcResults: '라디에이터 계산 결과',
        intercoolerCalcResults: '인터쿨러 계산 결과',
        radiatorSystemTotalHeatLoad: '시스템 총 열부하 (kW)',
        radiatorAmbientTemp: '환경 온도 (℃)',
        radiatorOutletAirTemp: '냉각 공기 출구 온도 (℃)',
        radiatorCoolantDensity: '냉각액 밀도 (kg/m3)',
        radiatorCoolantSpecificHeat: '냉각액 비열 (kJ/(kg·K))',
        radiatorCoolantInletTemp: '냉각액 입구 온도 (℃)',
        radiatorCoolantOutletTemp: '냉각액 출구 온도 (℃)',
        radiatorCoolantFlow: '냉각 순환 유량 (L/min)',
        radiatorLogMeanTempCorrection: '대수평균온도차 보정계수 εΔt',
        requiredHeatDissipationArea: '필요 방열 면적 (m2)',
        radiatorFrontalArea: '라디에이터 정면 면적 (m2)',
        requiredCoolingAirFlow: '필요 냉각 공기 유량 (m3/h)',
        singleFanAirFlow: '단일 팬 풍량 요구량 (m3/h)',
        intercoolerHeatLoad1: '인터쿨러 열부하 (kW)',
        pressurizedAirInletTemp: '가압 공기 입구 온도 (℃)',
        pressurizedAirOutletTemp: '가압 공기 출구 온도 (℃)',
        intercoolerCoolantInletTemp: '냉각액 입구 온도 (℃)',
        intercoolerCoolantOutletTemp: '냉각액 출구 온도 (℃)',
        pressurizedAirFlow: '가압 공기 유량 (L/min)',
        intercoolerCoolantFlow: '냉각액 유량 (L/min)',
        intercoolerLogMeanTempCorrection: '대수평균온도차 보정계수 εΔt',
        intercoolerRequiredArea: '필요 방열 면적 (m2)',
        
        // 연료전지 하이브리드 시스템 페이지
        hybridSystemTitle: '연료전지 하이브리드 시스템',
        vehicleParamsTitle: '차량 매개변수',
        vehicleMass: '만재 질량 (Kg)',
        range: '주행 거리 (Km)',
        rollingResistance: '굴림 저항 계수 f',
        
        // 연료전지 하이브리드 시스템 페이지 참고문헌
        references: '참고문헌',
        hybridSystemReference1: '왕커. 연료전지 하이브리드 파워시스템 설계[D]. [석사학위논문]. 청두: 서남교통대학.',
        hybridSystemReference2: '조춘붕. 연료전지 자동차 하이브리드 파워시스템 설계 연구[D]. [석사학위논문]. 절강: 절강대학.',
        hybridSystemReference3: '진호. 연료전지/리튬전지 하이브리드 파워시스템 최적화 관리[D]. [박사학위논문]. 절강: 절강대학.',
        hybridSystemReference4: '정진광. 수소연료전지 하이브리드 파워시스템 에너지 관리 전략 연구[D]. [석사학위논문]. 청두: 전자과기대학.',
        hybridSystemReference5: '장신신. 딥Q러닝 기반 연료전지 하이브리드 전기자동차 제어 연구[D]. [석사학위논문]. 충칭: 충칭교통대학.',
        dragCoefficient: '공기 저항 계수 Cd',
        maxSpeed: '최고 속도 (km/h)',
        maxGradeability: '최대 등판 능력 (%)',
        gradeabilitySpeed: '등판 속도 (km/h)',
        accelerationEndSpeed: '가속 종료 속도 (km/h)',
        accelerationTime: '가속 시간 (s)',
        frontalArea: '전면 면적 (m2)',
        powertrainEfficiency: '파워트레인 효율 η',
        rotatingMassCoefficient: '회전 질량 계수 δ',
        finalDriveRatio: '최종 구동비 iο',
        lowGearRatio: '저속 기어비 ig',
        highGearRatio: '고속 기어비 ig',
        tireRadius: '타이어 반지름 (m)',
        accessoryPower: '보조 전력 (kW)',
        motorEfficiency: '모터 및 컨트롤러 효율 η',
        batteryEfficiency: '배터리 효율 η',
        hydrogenBottlePressure: '수소 보틀 압력 (MPa)',
        hydrogenBottleVolume: '수소 보틀 용적 (L)',
        pemCellVoltage: '정격 PEM 셀 전압 (V)',
        hydrogenPrice: '수소 가격 (원/kg)',
        maxClimbingAngle: '최대 등판각 (θ)',
        acceleration: '가속도 (m/s2)',
        maxSpeedPower: 'Pmax1_최고속도 전력 (kW)',
        maxGradeabilityPower: 'Pmax2_최대등판 전력 (kW)',
        maxAccelerationPower: 'Pmax3_최대가속 전력 (kW)',
        motorPeakPower: '모터 피크 전력 (kW)',
        motorRatedPower: '모터 정격 전력 (kW)',
        motorPeakRPM: '모터 피크 RPM (r/min)',
        motorRatedRPM: '모터 정격 RPM (r/min)',
        fuelCellRequiredPower: '연료전지 필요 전력 (kW)',
        ratedConditionHydrogenConsumption: '정격 수소 소비량 (g/s)',
        requiredHydrogenMass: '필요 수소 질량 (Kg)',
        singleBottleHydrogenMass: '단일 보틀 수소 질량 (Kg)',
        requiredBottleCount: '필요 보틀 수 (n)',
        batteryRequiredPower: '배터리 필요 전력 (kW)',
        rated100kmHydrogenConsumption: '정격 100km 수소 소비량 (kg/100km)',
        rated100kmHydrogenPrice: '정격 100km 수소 가격 (원/100km)',
        
        // 동적 성능 페이지
        dynamicPerformanceTitle: '동적 성능 (베타)',
        currentDensityHeader: '전류밀도(A/cm²)',
        cellVoltageHeader: '셀전압(V)',
        hydrogenRatioHeader: '수소계량비',
        airRatioHeader: '공기계량비',
        anodeInletPressureHeader: '양극입구압력(kPa)',
        cathodeInletPressureHeader: '음극입구압력(kPa)',
        operatingTempDiffHeader: '동작온도차(℃)',
        processDataButton: '데이터 처리',
        clearDataButton: '데이터 지우기',
        dynamicPerformanceChart: '동적 성능 곡선',
        currentPosition: '현재 위치: 0',
        dataPasteAreaPlaceholder: 'Excel에서 데이터를 복사하여 여기에 붙여넣으세요 (한 줄에 하나의 데이터 쌍, 탭 또는 공백으로 구분)',
        
        // sliderValueDisplay 多语言翻译键
        sliderCurrentDensity: '전류밀도',
        sliderCellVoltage: '셀전압',
        sliderStackCurrent: '스택전류',
        sliderStackPower: '스택출력',
        sliderSystemHeatLoad: '시스템총열부하',
        sliderCoolantFlow: '스택냉각액유량',
        sliderHydrogenRatio: '수소계량비',
        sliderAirRatio: '공기계량비',
        sliderAnodePressure: '양극입구압력',
        sliderCathodePressure: '음극입구압력',
        sliderTempDiff: '동작온도차',
        
        // 图表相关多语言翻译键
        chartTitle: '연료전지 동적성능곡선',
        chartVoltageLabel: '전류밀도-셀전압관계 (V)',
        chartCurrentLabel: '전류밀도-스택전류관계 (A)',
        chartPowerLabel: '전류밀도-스택출력관계 (kW)',
        chartHeatLoadLabel: '전류밀도-시스템총열부하관계 (kW)',
        chartCoolantFlowLabel: '전류밀도-스택냉각액유량관계 (L/min)',
        chartTooltipStackCurrent: '스택전류',
        chartTooltipCellCount: '셀수',
        chartTooltipReactionArea: '반응면적',
        chartTooltipHydrogenRatio: '수소계량비',
        chartTooltipAirRatio: '공기계량비',
        chartTooltipAnodePressure: '양극입구압력',
        chartTooltipCathodePressure: '음극입구압력',
        chartTooltipTempDiff: '동작온도차',
        chartXAxisTitle: '전류밀도 (A/cm²)',
        chartYAxisTitle: '셀전압 (V)',
        chartY1AxisTitle: '스택출력 (kW)',
        chartY2AxisTitle: '스택전류 (A)',
        
        // 실용 도구
        'tools.sumTool': '합계 도구',
        'tools.velocityTool': '유속 변환',
        'tools.sumInputPlaceholder': '쉼표 또는 줄바꿈으로 구분하여 숫자 입력',
        'tools.sumButton': '합계',
        'tools.clearButton': '지우기',
        'tools.result': '결과: ',
        'tools.flowRate': '유량 (SLPM):',
        'tools.pipeDiameter': '배관 직경 (mm):',
        'tools.calculateVelocity': '유속 계산',
        'tools.velocity': '유속: ',
        'tools.area': '면적: ',
        
        // 提示信息
        loginRequired: '접근하려면 로그인이 필요합니다',
        processingData: '처리 중...',
        exportSuccess: '내보내기 성공',
        importSuccess: '가져오기 성공',
        calculationComplete: '계산 완료',
        
        // 第六页换热器/中冷器计算页面注释
        heatExchangerNote: '주의: 라디에이터 계산은 필요한 방열 면적과 팬 개수까지만 계산하면 됩니다. 단일 팬의 풍량 및 라디에이터 맞바람 면적은 선택한 팬의 효율과 직경을 동시에 고려해야 합니다. 인터쿨러는 방열 면적과 냉각액 유량까지만 계산하면 됩니다. Ka--라디에이터 총열전달계수, 기존 엔진 라디에이터는 일반적으로 104-143W/(m2·℃), 연료전지는 저온 방열이므로 낮은 값을 취하여 115 W/(m2·℃)를 취합니다.',
        
        // 程序说明对话框
        programInstructions: '프로그램 설명',
        instruction1: '1、첫 번째 페이지는 절대압 계산으로, 계산 매개변수는 주로 전류밀도와 셀 수에 기반합니다；',
        instruction2: '2、이 프로그램은 자가 가습 스택을 계산할 수 있으며, 가습기 입력을 0으로 유지하면 됩니다；',
        instruction3: '3、설계 입력은 다른 스택과 작동점에 따라 저장 및 가져오기가 가능합니다；',
        instruction4: '4、두 번째 페이지의 공기 열역학 계산에서 고도는 압축기의 전력 소비에만 영향을 미치며, 첫 번째 페이지의 절대압 계산에는 영향을 주지 않습니다；',
        instruction5: '5、여러 창을 동시에 열어 결과를 비교할 수 있습니다.',
        
        // COG加湿器
        cogHumidifier: 'COG 가습기',
        
        // Footer and About Us/Contact Us
        copyright: '© 2025 연료전지 계산기. 모든 권리 보유.',
        aboutUs: '회사 소개',
        contactUs: '연락처',
        aboutUsTitle: '회사 소개',
        aboutUsContent: '연료전지 계산기는 엔지니어와 연구자에게 정확한 계산 서비스를 제공하기 위해 설계된 전문 연료전지 계산 도구입니다. 소프트웨어 개발에서의 지원과 교정 작업에 대해 정 선생님께 감사드립니다.',
        contactUsTitle: '연락처',
        contactUsContent: '질문이나 제안이 있으시면 다음 방법으로 연락해 주십시오:',
        contactEmail: '이메일: 363383119@qq.com',
        
        // Login/Register Modal
        loginTitle: '로그인',
        registerTitle: '회원가입',
        emailLabel: '이메일:',
        passwordLabel: '비밀번호:',
        confirmPasswordLabel: '비밀번호 확인:',
        loginButton: '로그인',
        registerButton: '회원가입',
        noAccountText: '계정이 없으신가요?',
        registerNowLink: '지금 가입하기',
        hasAccountText: '이미 계정이 있으신가요?',
        loginNowLink: '지금 로그인하기',
        
        // Version Log Modal
        versionLogTitle: '버전 업데이트 로그',
        version221Title: 'V2.21 업데이트 내용',
        version221Item1: '7페이지에 정격 100km 수소 소비량 및 가격 추가',
        version221Item2: '1페이지에 강제 가습 환경 습도 설정 문제 추가',
        version221Item3: '버그 수정',
        version221Item4: '더 많은 사용자를 위한 3개 언어 전환 기능 추가',
        version221Item5: 'Github 저장소에 소스 코드 오픈소스화',
        version220Title: 'V2.20 업데이트 내용',
        version220Item1: '동적 성능(베타) 모듈 추가',
        version220Item2: '참고 문헌 내용 추가',
        version220Item3: '지속적으로 업그레이드 중',
        version212Title: 'V2.12 업데이트 내용',
        version212Item1: '하이브리드 시스템 계산 오류 수정',
        version212Item2: '라디에이터 및 인터쿨러 계산 정확도 최적화',
        version212Item3: '교차류 대수 온도차 보정 계수 계산 공식 업데이트',
        version212Item4: '결과 항목의 공식 호버 기능 추가, 계산 원리 이해 용이★★★',
        version212Item5: '페이지 응답 속도 및 사용자 경험 향상',
        version211Title: 'V2.11 업데이트 내용',
        version211Item1: '하이브리드 시스템 계산 페이지 추가',
        version211Item2: '유틸리티 도구 기능 최적화',
        version211Item3: '파이프라인 압력 손실 계산 버그 수정',
        version211Item4: '시스템 전체 안정성 향상',
        version210Title: 'V2.10 업데이트 내용',
        version210Item1: '완전히 새로운 인터페이스 디자인, 사용자 경험 향상',
        version210Item2: '여러 계산 모듈 추가',
        version210Item3: '데이터 가져오기/내보내기 기능 최적화',
        version210Item4: '알려진 문제 수정'
    }
};

// 语言切换函数
function switchLanguage(langCode) {
    const texts = translations[langCode];
    if (!texts) return;
    
    // 更新页面标题
    document.title = texts.pageTitle;
    const h1Element = document.querySelector('header h1');
    if (h1Element) h1Element.textContent = texts.pageTitle;
    
    // 更新标签页按钮
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabKeys = ['tabSystemDesign', 'tabAirThermal', 'tabHydrogenValue', 'tabValveFlow', 
                     'tabPipelinePressure', 'tabHeatExchanger', 'tabHybridSystem', 'tabDynamicPerformance', 'tabTools'];
    tabButtons.forEach((button, index) => {
        if (tabKeys[index] && texts[tabKeys[index]]) {
            button.textContent = texts[tabKeys[index]];
        }
    });
    
    // 更新按钮文本
    const buttonMappings = {
        'exportButton': 'btnExport',
        'importButton': 'btnImport',
        'downloadButton': 'btnDownload',
        'loginButton': 'btnLogin',
        'logoutButton': 'btnLogout',
        'viewProfile': 'btnViewProfile',
        'githubButton': 'btnGithub',

        'sumButton': 'btnSum'
    };
    
    Object.entries(buttonMappings).forEach(([id, key]) => {
        const element = document.getElementById(id);
        if (element && texts[key]) {
            element.textContent = texts[key];
        }
    });
    
    // 更新输入标签
    const inputMappings = {
        'cellVoltage': 'cellVoltage',
        'cellCount': 'cellCount',
        'reactionArea': 'reactionArea',
        'currentDensity': 'currentDensity',
        'airRatio': 'airRatio',
        'hydrogenRatio': 'hydrogenRatio',
        'operatingTemp': 'operatingTemp',
        'ambientTemp': 'ambientTemp',
        'tempDifference': 'tempDifference',
        'humidity': 'humidity',
        'hydrogenUtilization': 'hydrogenUtilization',
        'anodeInletPressure': 'anodeInletPressure',
        'cathodeInletPressure': 'cathodeInletPressure',
        'anodePressureLoss': 'anodePressureLoss',
        'cathodePressureLoss': 'cathodePressureLoss',
        'coolingPressureLoss': 'coolingPressureLoss',
        'waterDistribution': 'waterDistribution',
        'anodeInletTemp': 'anodeInletTemp',
        'gasSeparatorEfficiency': 'gasSeparatorEfficiency',
        'intercoolerPressureLoss': 'intercoolerPressureLoss',
        'compressorOutletTemp': 'compressorOutletTemp',
        'glycolPercentage': 'glycolPercentage',
        'humidifierEfficiency': 'humidifierEfficiency',
        'humidifierDryLoss': 'humidifierDryLoss',
        'humidifierWetLoss': 'humidifierWetLoss'
    };
    
    Object.entries(inputMappings).forEach(([id, key]) => {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label && texts[key]) {
            label.textContent = texts[key] + ':';
        }
    });
    
    // 更新结果标题
    const resultTitles = document.querySelectorAll('.result-section h3');
    const resultKeys = ['resultStackCalc', 'resultHydrogenSystem', 'resultAirSystem', 'resultHeatSystem'];
    resultTitles.forEach((title, index) => {
        if (resultKeys[index] && texts[resultKeys[index]]) {
            title.textContent = texts[resultKeys[index]];
        }
    });
    
    // 更新结果标签
    const resultMappings = {
        'stackCurrent': 'stackCurrent',
        'stackVoltage': 'stackVoltage',
        'stackPower': 'stackPower',
        'theoreticalHydrogenConsumption': 'theoreticalHydrogenConsumption',
        'theoreticalOxygenConsumption': 'theoreticalOxygenConsumption',
        'theoreticalWaterProduction': 'theoreticalWaterProduction',
        'actualHydrogenFlow': 'actualHydrogenFlow',
        'actualAirFlow': 'actualAirFlow',
        'actualHydrogenFlowNLPM': 'actualHydrogenFlowNLPM',
        'actualAirFlowNLPM': 'actualAirFlowNLPM',
        'reactionHeat': 'reactionHeat',
        'stackEfficiency': 'stackEfficiency'
    };
    
    Object.entries(resultMappings).forEach(([id, key]) => {
        const resultItem = document.getElementById(id);
        if (resultItem && texts[key]) {
            const parentDiv = resultItem.closest('.result-item');
            if (parentDiv) {
                const span = parentDiv.querySelector('span:first-child');
                if (span) {
                    span.textContent = texts[key] + '：';
                }
            }
        }
    });
    
    // 更新工具页面
    const toolsElements = {
        'h2': ['toolsSum', 'toolsFlowVelocity'],
        'placeholder': {
            'sumInput': 'tools.sumInputPlaceholder'
        },
        'label': {
            'flowRate': 'flowRate',
            'pipeDiameter': 'pipeDiameter'
        }
    };
    
    // 更新工具标题
    const toolsH2 = document.querySelectorAll('#tools h2');
    toolsH2.forEach((h2, index) => {
        if (toolsElements.h2[index] && texts[toolsElements.h2[index]]) {
            h2.textContent = texts[toolsElements.h2[index]];
        }
    });
    
    // 更新占位符
    Object.entries(toolsElements.placeholder).forEach(([id, key]) => {
        const element = document.getElementById(id);
        if (element && texts[key]) {
            element.placeholder = texts[key];
        }
    });
    
    // 更新结果标签
    const resultSpans = document.querySelectorAll('.tool-result span:first-child');
    resultSpans.forEach(span => {
        if (texts.resultLabel) {
            span.textContent = texts.resultLabel + ': ';
        }
    });
    
    // 更新其他标题
    const stackDesignH2 = document.querySelector('#system-design h2');
    if (stackDesignH2 && texts.stackDesignTitle) {
        stackDesignH2.textContent = texts.stackDesignTitle;
    }
    
    // 更新语言按钮提示
    const languageButton = document.getElementById('languageButton');
    if (languageButton && texts.languageSwitch) {
        languageButton.title = texts.languageSwitch;
    }
    
    // 通用处理所有带有 data-i18n 属性的元素
    const elementsWithI18n = document.querySelectorAll('[data-i18n]');
    elementsWithI18n.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key && texts[key]) {
            // 对于结果显示标签，检查翻译文本是否已包含冒号
            if (element.tagName === 'SPAN' && element.closest('.result-item')) {
                // 如果翻译文本已经以冒号结尾，直接使用；否则添加冒号
                const translatedText = texts[key];
                if (translatedText.endsWith('：') || translatedText.endsWith(':')) {
                    element.textContent = translatedText;
                } else {
                    element.textContent = translatedText + '：';
                }
            } else {
                element.textContent = texts[key];
            }
        }
    });
    
    // 处理所有带有 data-i18n-placeholder 属性的元素
    const elementsWithPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
    elementsWithPlaceholder.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (key && texts[key]) {
            element.placeholder = texts[key];
        }
    });
    
    // 处理所有带有 data-i18n-title 属性的元素（用于tooltip）
    const elementsWithTitle = document.querySelectorAll('[data-i18n-title]');
    elementsWithTitle.forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (key && texts[key]) {
            element.title = texts[key];
        }
    });
    
    // 更新所有结果项的悬停公式
    const formulaMappings = {
        // 电堆计算公式
        '电堆电流(A) = 反应面积(cm²) * 电流密度(A/cm²)': 'formulaStackCurrent',
        '电堆电压(V) = 单电池电压(V) * 电堆节数': 'formulaStackVoltage',
        '电堆功率(kW) = (电堆电流 * 电堆电压) / 1000': 'formulaStackPower',
        '理论反应消耗氢气量(mol/s) = (反应面积 * 电流密度 * 电堆节数) / (96485 * 2)': 'formulaTheoreticalHydrogenConsumption',
        '理论反应消耗氧气量(mol/s) = 理论反应消耗氢气量 / 2': 'formulaTheoreticalOxygenConsumption',
        '理论反应产水量(mol/s) = 理论反应消耗氢气量': 'formulaTheoreticalWaterProduction',
        '实际入口H2流量(mol/s) = 理论反应消耗氢气量 * 氢气计量比': 'formulaActualHydrogenFlow',
        '实际入口Air流量(mol/s) = (理论反应消耗氢气量 / 2) * 空气计量比 / 0.21': 'formulaActualAirFlow',
        '实际入口H2流量(NLPM) = 实际入口H2流量(mol/s) * 22.4 * 60': 'formulaActualHydrogenFlowNLPM',
        '实际入口Air流量(NLPM) = 实际入口Air流量(mol/s) * 22.4 * 60': 'formulaActualAirFlowNLPM',
        '反应产热量(LHV-kW) = 电堆功率 * (1.254 - 单电池电压) / 单电池电压': 'formulaReactionHeat',
        '电堆效率(%) = (单电池电压 / 1.254) * 100': 'formulaStackEfficiency',
        
        // 氢气子系统公式
        '系统消耗氢气量(mol/s) = 理论反应消耗氢气量 * 100 / 氢气利用率': 'formulaSystemHydrogenConsumption',
        '系统供氢量(NLPM) = 系统消耗氢气量 * 22.4 * 60': 'formulaSystemHydrogenSupplyNLPM',
        '氢气尾气排气(NLPM) = 系统供氢量 * (1 - 氢气利用率/100)': 'formulaHydrogenExhaust',
        '出口氢气循环量(mol/s) = 理论反应消耗氢气量 * (氢气过量比 - 1)': 'formulaHydrogenRecirculation',
        '出口氢气循环量(NLPM) = 出口氢气循环量(mol/s) * 22.4 * 60': 'formulaHydrogenRecirculationNLPM',
        '阳极出口总水量(mol/s) = 理论反应消耗氢气量 * 水分布系数 + 进入电堆水量': 'formulaAnodeOutletWater',
        '阳极出口温度(℃) = 操作温度': 'formulaAnodeOutletTemp',
        '对应的饱和蒸汽压(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T为温度）': 'formulaSaturatedVaporPressure',
        '阳极出口压力(kPa) = 阳极入口压力 - 阳极压损': 'formulaAnodeOutletPressure',
        '阳极出口相对湿度(%) = 阳极出口压力*(阳极出口总水量/(阳极出口总水量+氢气循环量))/饱和蒸汽压*100': 'formulaAnodeOutletHumidity',
        '阳极出口液态水量(mol/s) = 当相对湿度>100时，阳极出口总水量 - 氢气循环量*饱和蒸汽压/(阳极出口压力-饱和蒸汽压)，否则为0': 'formulaAnodeLiquidWater',
        '阳极冷凝水放热(kW) = 阳极出口液态水量*18*2258/1000（18是水的摩尔质量，2258是汽化潜热）': 'formulaAnodeCondensationHeat',
        '出口气态水量(mol/s) = 阳极出口总水量 - 阳极出口液态水量': 'formulaOutletGaseousWater',
        '阳极入口氢气温度(℃) = 阳极入口温度': 'formulaAnodeInletHydrogenTemp',
        '入堆氢气相对湿度(%) = 出口气态水量/(出口气态水量+系统供氢量+氢气循环量)*阳极入口压力/饱和蒸汽压*100': 'formulaInletHydrogenHumidity',
        '进入电堆水量(mol/s) = 阳极出口液态水量*(1-气液分离器效率/100) + 出口气态水量': 'formulaInletStackWater',
        '水分布系数(阳极) = 水分布系数设置值': 'formulaWaterDistributionCoefficient',
        
        // 空气子系统公式
        '系统供空气量(mol/s) = 实际入口Air流量(mol/s)': 'formulaSystemAirSupply',
        '系统供空气量(NLPM) = 实际入口Air流量(NLPM)': 'formulaSystemAirSupplyNLPM',
        '空气泵入口温度(℃) = 环境温度': 'formulaAirPumpInletTemp',
        '出口空气流量(mol/s) = 实际入口Air流量 - 理论氢气消耗/2': 'formulaOutletAirFlow',
        '出口空气流量(NLPM) = 出口空气流量*22.4*60': 'formulaOutletAirFlowNLPM',
        '阴极出口总水量(mol/s) = 理论产水量*(1-水分布系数) + 从环境中带入水分 + 干气加湿用水量': 'formulaCathodeOutletWater',
        '阴极出口温度(℃) = 操作温度': 'formulaCathodeOutletTemp',
        '阴极出口压力(kPa) = 阴极入口压力 - 阴极压损': 'formulaCathodeOutletPressure',
        '空气出口相对湿度(%) = 阴极出口压力*(阴极出口总水量/(阴极出口总水量+出口空气流量))/对应的饱和蒸汽压*100': 'formulaAirOutletHumidity',
        '出口液态水量(mol/s) = 当相对湿度>100时，阴极出口总水量 - 出口空气流量*饱和蒸汽压/(阴极出口压力-饱和蒸汽压)，否则为0': 'formulaOutletLiquidWater',
        '冷凝水放热(kW) = 出口液态水量*18*2258/1000（18是水的摩尔质量，2258是汽化潜热）': 'formulaCondensationHeat',
        '出口水蒸气分压(理论值)(kPa) = 阴极出口压力*(阴极出口总水量/(阴极出口总水量+出口空气流量))': 'formulaOutletWaterVaporPressure',
        '出口水蒸气分压(实际值)(kPa) = 当相对湿度>100时为饱和蒸汽压，否则为理论值': 'formulaOutletWaterVaporPressure1',
        '出口露点温度(℃) = 1657.46/(7.07406-log10(出口水蒸气分压)) - 227.02': 'formulaOutletDewPointTemp',
        '中冷器出口温度(℃) = 操作温度 - 温度差/2': 'formulaIntercoolerOutletTemp',
        '环境饱和蒸汽压(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T为环境温度）': 'formulaAmbientSaturatedVaporPressure',
        '从环境中带入水分(mol/s) = 湿度*环境饱和蒸汽压*实际入口Air流量/101/100': 'formulaAmbientWaterIntake',
        
        // 换热子系统公式
        '冷却液密度(kg/m3) = 乙二醇占比*1.7657 + 981.43（乙二醇溶液）': 'formulaCoolantDensity',
        '冷却液比热(kJ/(kg·K)) = -0.0002*乙二醇占比^2 - 0.004*乙二醇占比 + 4.2': 'formulaCoolantSpecificHeat',
        '反应产热量(LHV-kW) = 电堆功率*(1.254-单电池电压)/单电池电压': 'formulaReactionHeat1',
        '过饱和水冷凝放热量(kW) = 冷凝水放热 + 阳极冷凝水放热': 'formulaSuperSaturatedWaterCondensationHeat',
        '中冷器热负荷(kW) = 1.005*(系统供空气量*28.96/1000)*(空压机出口温度-中冷器出口温度)': 'formulaIntercoolerHeatLoad',
        '系统总热负荷(kW) = 中冷器热负荷 + 过饱和水冷凝放热量 + 反应产热量': 'formulaSystemTotalHeatLoad',
        '系统冷却液流量(L/min) = 系统总热负荷/温度差/冷却液密度/冷却液比热*1000*60': 'formulaStackCoolantFlow',
        
        // COG加湿器公式
        '干气加湿用水量(mol/s) = (阴极出口总水量 - 出口液态水量)*加湿器效率/100': 'formulaDryGasHumidificationWater',
        '干侧出口压力(kPa) = 阴极入口压力': 'formulaHumidifierDrySidePressure',
        '干侧出口温度(℃) = (中冷器出口温度 + 操作温度 - 温度差)/2': 'formulaHumidifierDrySideTemp',
        '干侧出口饱和蒸汽压(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T为温度）': 'formulaHumidifierDrySideSaturatedVaporPressure',
        '干侧出口相对湿度(%) = 干气加湿用水量/实际入口Air流量*加湿器干侧出口压力/干侧出口饱和蒸汽压*100': 'formulaHumidifierDrySideHumidity',
        '湿侧出口压力(kPa) = 阴极出口压力 - 加湿器湿侧压力损失': 'formulaHumidifierWetSidePressure',
        '湿侧出口温度(℃) = 加湿器干侧出口温度': 'formulaHumidifierWetSideTemp',
        '湿侧出口水量(mol/s) = 阴极出口总水量 - 出口液态水量 - 干气加湿用水量': 'formulaHumidifierWetSideWater',
        '湿侧出口饱和蒸汽压(kPa) = 0.00000097*T^4 - 0.00003455*T^3 + 0.00371504*T^2 + 0.01245629*T + 0.71004367（T为温度）': 'formulaHumidifierWetSideSaturatedVaporPressure',
        '湿侧出口相对湿度(%) = 湿侧出口水量/出口空气流量*湿侧出口压力/湿侧出口饱和蒸汽压*100': 'formulaHumidifierWetSideHumidity',
        
        // 空气热力计算公式
        '在高度h上的压力(Pa) = 当altitude>11000m时，22631.8*exp((11000-altitude)/6340)；否则，101325*(1-altitude/44330)^5.25588': 'formulaPressureAtHeight',
        '在高度h上的密度(kg/m3) = 当altitude>11000m时，0.3639*exp((11000-altitude)/6340)；否则，1.225*(1-altitude/44330)^4.25588': 'formulaDensityAtHeight',
        '在高度h上的温度(K) = 当altitude>11000m时，216.65；否则，288.15-0.0065*altitude': 'formulaTemperatureKAtHeight',
        '在高度h上的温度(℃) = temperatureKAtHeight - 273.15': 'formulaTemperatureCAtHeight',
        '空气入口体积流量(m^3/s) = airFlowRate / 1000 / 60': 'formulaAirInletVolumeFlow',
        '空气入口质量流量(g/s) = airInletVolumeFlow * densityAtHeight * 1000': 'formulaAirInletMassFlow',
        '出口空气压力(Pa) = inletPressure * 100000 * (1 - intercoolerPressureLoss/100)': 'formulaOutletAirPressure',
        '空压机压比(ε) = outletAirPressure / inletAirPressure': 'formulaCompressorPressureRatio',
        '出口空气温度(K) = inletAirTemperature * (1 + ((outletAirPressure/inletAirPressure)^0.286-1)/compressorEfficiency)': 'formulaOutletAirTempK',
        '出口空气温度(℃) = outletAirTempK - 273.15': 'formulaOutletAirTempC',
        '空气温升(K) = outletAirTempK - inletAirTemperature': 'formulaAirTempRise',
        '定熵压缩轴功(W) = k/(k-1)*p1*V1*[1-(p2/p1)^((k-1)/k)]': 'formulaIsentropicCompressionWork',
        '空压机功耗(W) = 空气入口质量流量 × 空气定压比热 × 空气温升': 'formulaCompressorPowerConsumption',
        
        // 阀门流体计算公式
        '水：Kv(m3/h) = Q*sqrt(ρ/(1000*ΔP))；气体次临界：Kv = QN/514*sqrt(T1*ρN/(P2*ΔP))；气体超临界：Kv = QN/(257*P1)*sqrt(T1*ρN)': 'formulaValveKvValue',
        'DN(mm) = -77.861*Kv^6+256.11*Kv^5-331.17*Kv^4+215.74*Kv^3-77.502*Kv^2+20.183*Kv+0.476': 'formulaValveDNValue',
        
        // 管路压损计算公式（气体）
        '介质密度(kg/m3) = 标况密度*273.15/介质温度*介质压力/101325': 'formulaGasDensityResult',
        '介质流量(m3/s) = 介质流量(NLPM)/1000/60*101325/介质压力*介质温度/273.15': 'formulaGasFlowRateM3sResult',
        '主管面积(m2) = 0.25*3.14159*主管内径^2/1000000': 'formulaMainPipeAreaResult',
        '主管流速(m/s) = 介质流量/主管面积': 'formulaMainPipeVelocityResult',
        '分堆入口管面积(m2) = 0.25*3.14159*分堆入口管内径^2/1000000': 'formulaBranchPipeAreaResult',
        '分堆入口管流速(m/s) = 介质流量/电堆个数/分堆入口管面积': 'formulaBranchPipeVelocityResult',
        '雷诺数 = 介质密度*主管流速*主管内径/介质动力粘度/1000': 'formulaReynoldsNumberResult',
        '摩擦系数 = (-0.5 / math.log10(管壁绝对粗糙度/3.7/主管内径))^2': 'formulaFrictionCoefficientResult',
        '管道阻力 = 摩擦系数*管道长度/主管内径*介质密度*主管流速^2/2': 'formulaPipeResistanceResult',
        '弯头摩擦系数 = 30*摩擦系数': 'formulaElbowFrictionCoefficientResult',
        '三通摩擦系数 = 60*摩擦系数': 'formulaTeeFrictionCoefficientResult',
        '弯头阻力(kPa) = 弯头个数*0.5*弯头摩擦系数*介质密度*主管流速^2/1000': 'formulaElbowResistanceResult',
        '三通阻力(kPa) = 三通个数*0.5*三通摩擦系数*介质密度*主管流速^2/1000': 'formulaTeeResistanceResult',
        '局部阻力(kPa) = 弯头阻力+三通阻力': 'formulaLocalResistanceResult',
        '管系阻力(kPa) = 管道阻力+局部阻力': 'formulaSystemResistanceResult',
        
        // 管路压损计算公式（液体）
        '介质流量(m3/s) = 介质流量(NLPM)/1000/60': 'formulaWaterFlowRateM3sResult',
        '雷诺数 = 冷却液密度*主管流速*主管内径/介质动力粘度/1000': 'formulaWaterReynoldsNumberResult',
        '管道阻力(kPa) = 摩擦系数*管道长度/主管内径*冷却液密度*主管流速^2/2': 'formulaWaterPipeResistanceResult',
        '弯头阻力(kPa) = 弯头个数*0.5*弯头摩擦系数*冷却液密度*主管流速^2/1000': 'formulaWaterElbowResistanceResult',
        '三通阻力(kPa) = 三通个数*0.5*三通摩擦系数*冷却液密度*主管流速^2/1000': 'formulaWaterTeeResistanceResult',
        '局部阻力(kPa) = 弯头阻力+三通阻力': 'formulaWaterLocalResistanceResult'
    };
    
    // 更新所有带有title属性的元素
    const elementsWithTitleAttr = document.querySelectorAll('[title]');
    console.log(`Updating ${elementsWithTitleAttr.length} elements with title attribute for language: ${langCode}`);
    
    elementsWithTitleAttr.forEach(element => {
        // 优先使用 data-formula-key 属性
        const formulaKey = element.getAttribute('data-formula-key');
        if (formulaKey && texts[formulaKey]) {
            console.log(`Updating element with formula key: ${formulaKey} to: ${texts[formulaKey]}`);
            element.title = texts[formulaKey];
        } else {
            console.log(`Element has no formula key or translation not found. Formula key: ${formulaKey}, Element:`, element);
        }
    });
    
    // 更新动态性能页面的图表和滑块显示
    if (typeof performanceChart !== 'undefined' && performanceChart) {
        // 重新绘制图表以更新标签
        if (typeof parsedData !== 'undefined' && parsedData.currentDensity && parsedData.currentDensity.length > 0) {
            drawChart(parsedData);
        }
    }
    
    // 更新滑块显示文本
    if (typeof updateSliderDisplay === 'function' && typeof dataSlider !== 'undefined' && dataSlider) {
        const currentIndex = parseInt(dataSlider.value) || 0;
        updateSliderDisplay(currentIndex);
    }
}

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
    
    // GitHub按钮功能 - 需要先登录才能访问
    const githubButton = document.getElementById('githubButton');
    if (githubButton) {
        githubButton.addEventListener('click', function() {
            // 检查是否已登录
            const userInfo = document.getElementById('userInfo');
            const isLoggedIn = userInfo && userInfo.style.display !== 'none';
            
            if (isLoggedIn) {
                // 已登录，跳转到GitHub
                window.open('https://github.com/luorc-lqh/fuelcellcaculate', '_blank');
            } else {
                // 未登录，显示提示
                alert('请先登录');
            }
        });
    }

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
        // 获取当前语言
        const currentLang = getCurrentLanguage();
        let densityText = '';
        
        // 根据当前语言获取对应的密度显示文本
        switch(currentLang) {
            case 'en':
                densityText = 'Selected medium density: ' + this.value + ' kg/m³';
                break;
            case 'ja':
                densityText = '選択媒体の密度: ' + this.value + ' kg/m³';
                break;
            case 'ko':
                densityText = '선택된 매체의 밀도: ' + this.value + ' kg/m³';
                break;
            default: // zh-CN
                densityText = '选择介质的密度为: ' + this.value + ' kg/m³';
                break;
        }
        
        // 更新显示的介质密度
        document.getElementById('selectedDensity').textContent = densityText;
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
    
    // 获取额定工况PEM节电压和氢气利用率
    const pemCellVoltage = parseFloat(document.getElementById('pemCellVoltage').value) || 0.62;
    const hydrogenUtilization = parseFloat(document.getElementById('hydrogenUtilization').value) || 98.5;
    
    // 额定工况氢耗 - 修改后的公式 (燃料电池所需功率_value*1000/额定工况PEM节电压/96485/(氢气利用率/100))
    const ratedConditionHydrogenConsumption = fuelCellRequiredPower * 1000 / pemCellVoltage / 96485 / (hydrogenUtilization / 100); // 额定工况氢耗(g/s)
    
    // PEM所需氢气质量 - 按照用户公式 (b8/e8*3600*额定工况氢耗_value/1000)
    const requiredHydrogenMass = range / maxSpeed * 3600 * ratedConditionHydrogenConsumption / 1000; // 所需氢气质量(Kg)
    
    // 单瓶存储氢气质量 - 按照用户公式 (t8*1000*u8/8.314/298*2.016/1000)
    const singleBottleHydrogenMass = hydrogenBottlePressure * 1000 * hydrogenBottleVolume / 8.314 / 298 * 2.016 / 1000; // 单瓶存储氢气质量(Kg)
    
    // 所需氢瓶数量 - 按照用户公式 (PEM所需氢气质量_value/单瓶存储氢气质量_value)
    // 确保单瓶氢气质量不为零，避免除零错误
    const safeSingleBottleHydrogenMass = Math.max(0.1, singleBottleHydrogenMass);
    const requiredBottleCount = requiredHydrogenMass / safeSingleBottleHydrogenMass; // 所需氢瓶数量(n)
    
    // 获取氢气价格
    const hydrogenPrice = parseFloat(document.getElementById('hydrogenPrice').value) || 30;
    
    // 额定百公里氢耗 - 按照用户公式 (额定工况PEM氢耗 * 100 / 最高车速 * 3600 / 1000)
    const rated100kmHydrogenConsumption = ratedConditionHydrogenConsumption * 100 / maxSpeed * 3600 / 1000; // 额定百公里氢耗(kg/100km)
    
    // 额定百公里氢气价格 - 按照用户公式 (额定百公里氢耗 * 氢气价格)
    const rated100kmHydrogenPrice = rated100kmHydrogenConsumption * hydrogenPrice; // 额定百公里氢气价格(元/100km)
    
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
    document.getElementById('rated100kmHydrogenConsumption').textContent = rated100kmHydrogenConsumption.toFixed(4); // 百公里氢耗保留4位小数
    document.getElementById('rated100kmHydrogenPrice').textContent = rated100kmHydrogenPrice.toFixed(2); // 百公里氢气价格保留2位小数
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
        
        // 获取当前语言的翻译
        const currentLang = getCurrentLanguage();
        const t = translations[currentLang];
        
        // 创建新图表
        performanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.currentDensity,
                datasets: [{
                    label: t.chartVoltageLabel,
                    data: data.voltage,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true,
                    yAxisID: 'y'
                },
                {
                    label: t.chartCurrentLabel,
                    data: data.current,
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false,
                    yAxisID: 'y2'
                },
                {
                    label: t.chartPowerLabel,
                    data: data.power,
                    borderColor: '#2ecc71',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true,
                    yAxisID: 'y1'
                },
                {
                    label: t.chartHeatLoadLabel,
                    data: data.heatLoad,
                    borderColor: '#f39c12',
                    backgroundColor: 'rgba(243, 156, 18, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false,
                    yAxisID: 'y3'
                },
                {
                    label: t.chartCoolantFlowLabel,
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
                        text: t.chartTitle,
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
                                    `${t.chartTooltipStackCurrent}: ${data.current[index]} A`,
                                    `${t.chartTooltipCellCount}: ${parseInt(document.getElementById('cellCount').value) || 100}`,
                                    `${t.chartTooltipReactionArea}: ${parseFloat(document.getElementById('reactionArea').value) || 100} cm²`
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
                            text: t.chartXAxisTitle
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: t.chartYAxisVoltageTitle
                        },
                        suggestedMin: 0,
                        suggestedMax: 1
                    },
                    y1: {
                        title: {
                            display: true,
                            text: t.chartYAxisPowerTitle
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
                            text: t.chartYAxisCurrentTitle
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
                            text: t.chartYAxisHeatLoadTitle
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
                            text: t.chartYAxisCoolantFlowTitle
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
                    const currentLang = getCurrentLanguage();
                    const t = translations[currentLang];
                    sliderValueDisplay.textContent = `${t.sliderCurrentDensity}: ${parsedData.currentDensity[index]} A/cm², ${t.sliderCellVoltage}: ${parsedData.voltage[index]} V, ${t.sliderStackCurrent}: ${parsedData.current[index]} A, ${t.sliderStackPower}: ${parsedData.power[index]} kW, ${t.sliderSystemHeatLoad}: ${parsedData.heatLoad[index]} kW, ${t.sliderCoolantFlow}: ${parsedData.coolantFlow[index]} L/min, ${t.sliderHydrogenRatio}: ${parsedData.hydrogenRatio[index]}, ${t.sliderAirRatio}: ${parsedData.airRatio[index]}, ${t.sliderAnodePressure}: ${parsedData.anodePressure[index]} kPa, ${t.sliderCathodePressure}: ${parsedData.cathodePressure[index]} kPa, ${t.sliderTempDiff}: ${parsedData.temperatureDiff[index]} ℃`;
                    
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

    // 语言切换功能
    const languageButton = document.getElementById('languageButton');
    const languageMenu = document.getElementById('languageMenu');
    const currentLanguageSpan = document.getElementById('currentLanguage');
    
    if (languageButton && languageMenu) {
        // 点击语言按钮显示/隐藏菜单
        languageButton.addEventListener('click', function(e) {
            e.stopPropagation();
            languageMenu.style.display = languageMenu.style.display === 'none' ? 'block' : 'none';
        });

        // 点击页面其他地方隐藏菜单
        document.addEventListener('click', function() {
            languageMenu.style.display = 'none';
        });

        // 阻止菜单点击事件冒泡
        languageMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // 语言选择功能
        const languageItems = languageMenu.querySelectorAll('.language-menu-item');
        languageItems.forEach(item => {
            item.addEventListener('click', function() {
                const selectedLang = this.getAttribute('data-lang');
                const selectedText = this.textContent;
                
                // 更新当前语言显示
                currentLanguageSpan.textContent = selectedText;
                
                // 更新活跃状态
                languageItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                // 隐藏菜单
                languageMenu.style.display = 'none';
                
                // 保存语言设置到localStorage
                localStorage.setItem('selectedLanguage', selectedLang);
                
                // 调用语言切换函数
                switchLanguage(selectedLang);
                console.log('切换到语言:', selectedLang, selectedText);
            });
        });

        // 页面加载时恢复语言设置
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'zh-CN';
        const savedLanguageItem = languageMenu.querySelector(`[data-lang="${savedLanguage}"]`);
        if (savedLanguageItem) {
            currentLanguageSpan.textContent = savedLanguageItem.textContent;
            languageItems.forEach(i => i.classList.remove('active'));
            savedLanguageItem.classList.add('active');
            // 应用保存的语言设置
            switchLanguage(savedLanguage);
        }
    }
});

// 获取当前语言的函数
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'zh-CN';
}