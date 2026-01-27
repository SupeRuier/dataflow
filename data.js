// Content Data Store
const moduleData = {
    "module-A": {
        title: "A. 数据源层 (Data Source Layer)",
        subtitle: "双轨制数据接入体系：开源广度 + 闭源深度",
        content: `
                    <div class="space-y-8 animate-fade-in">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition group">
                                <h3 class="flex items-center font-bold text-lg mb-4 text-slate-800">
                                    <span class="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center mr-3 text-slate-700 shadow-sm group-hover:scale-110 transition"><i class="fa-brands fa-github"></i></span>
                                    开源数据支线
                                </h3>
                                <ul class="space-y-3 text-sm text-slate-600">
                                    <li class="flex items-start"><i class="fa-solid fa-circle-check text-slate-400 mt-1 mr-3 text-xs"></i> <span><strong>核心来源：</strong> Hugging Face, Common Crawl, Wikipedia, arXiv学术库。</span></li>
                                    <li class="flex items-start"><i class="fa-solid fa-circle-check text-slate-400 mt-1 mr-3 text-xs"></i> <span><strong>接入方式：</strong> 部署外网权限节点，配置定时爬虫与镜像同步任务。</span></li>
                                    <li class="flex items-start"><i class="fa-solid fa-circle-check text-slate-400 mt-1 mr-3 text-xs"></i> <span><strong>存储目标：</strong> 原始数据直接落入 OSS (Object Storage) 临时桶。</span></li>
                                </ul>
                            </div>
                            <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-red-200 transition group">
                                <h3 class="flex items-center font-bold text-lg mb-4 text-slate-800">
                                    <span class="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center mr-3 text-red-500 shadow-sm group-hover:scale-110 transition"><i class="fa-solid fa-shield-halved"></i></span>
                                    闭源数据支线
                                </h3>
                                <ul class="space-y-3 text-sm text-slate-600">
                                    <li class="flex items-start"><i class="fa-solid fa-lock text-red-400 mt-1 mr-3 text-xs"></i> <span><strong>核心来源：</strong> 企业自有业务数据、高价购买的版权数据、定制化采集数据。</span></li>
                                    <li class="flex items-start"><i class="fa-solid fa-lock text-red-400 mt-1 mr-3 text-xs"></i> <span><strong>安全接入：</strong> 通过内网专线与加密传输通道接入，严格审计日志。</span></li>
                                </ul>
                            </div>
                        </div>

                        <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 flex items-start">
                            <i class="fa-solid fa-lightbulb text-blue-500 mt-0.5 mr-3"></i>
                            <div>
                                <h4 class="font-bold text-blue-900 text-sm mb-1">设计策略</h4>
                                <p class="text-sm text-blue-800 opacity-90">该层并不对数据质量负责，主要目标是<strong>高吞吐量</strong>和<strong>完整性</strong>。所有数据均保留原始版本快照，以便后续溯源和重新处理。</p>
                            </div>
                        </div>
                    </div>
                `
    },
    "module-B": {
        title: "B. 数据预处理层 (Preprocessing)",
        subtitle: "AlphaSeed 平台：从原始数据到高质量训练集的核心工厂",
        content: `
                    <div class="space-y-10">
                        <!-- Flow Steps -->
                        <div class="relative py-4">
                            <div class="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 transform -translate-y-1/2"></div>
                            <div class="grid grid-cols-4 gap-2 lg:gap-4 text-center">
                                <div class="group">
                                    <div class="w-10 h-10 lg:w-14 lg:h-14 bg-white border-2 border-slate-200 group-hover:border-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-3 font-bold text-slate-500 shadow-sm z-10 relative transition-colors text-xs lg:text-base">1</div>
                                    <span class="text-xs lg:text-sm font-bold text-slate-700 block">轻量清洗</span>
                                </div>
                                <div class="group">
                                    <div class="w-10 h-10 lg:w-14 lg:h-14 bg-white border-2 border-slate-200 group-hover:border-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-3 font-bold text-slate-500 shadow-sm z-10 relative transition-colors text-xs lg:text-base">2</div>
                                    <span class="text-xs lg:text-sm font-bold text-slate-700 block">深度过滤</span>
                                </div>
                                <div class="group">
                                    <div class="w-10 h-10 lg:w-14 lg:h-14 bg-blue-50 border-2 border-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3 font-bold text-blue-600 shadow-md z-10 relative scale-110 text-xs lg:text-base">3</div>
                                    <span class="text-xs lg:text-sm font-bold text-blue-700 block">AI 辅助标注</span>
                                </div>
                                <div class="group">
                                    <div class="w-10 h-10 lg:w-14 lg:h-14 bg-white border-2 border-slate-200 group-hover:border-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-3 font-bold text-slate-500 shadow-sm z-10 relative transition-colors text-xs lg:text-base">4</div>
                                    <span class="text-xs lg:text-sm font-bold text-slate-700 block">人工复核</span>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-sm">
                            <h3 class="font-bold text-lg mb-6 text-slate-800 flex items-center">
                                <i class="fa-solid fa-microchip text-blue-500 mr-2"></i>
                                AlphaSeed 闭源处理引擎详解
                            </h3>
                            <div class="space-y-4">
                                <div class="flex items-start p-3 hover:bg-slate-50 rounded-lg transition">
                                    <div class="mt-1 mr-3 w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h4 class="font-bold text-sm text-slate-800">敏感信息剔除 (De-identification)</h4>
                                        <p class="text-xs text-slate-500 mt-1">使用正则 + NLP 模型自动识别并掩盖身份证、手机号、邮箱及人脸信息，确保合规。</p>
                                    </div>
                                </div>
                                <div class="flex items-start p-3 hover:bg-slate-50 rounded-lg transition">
                                    <div class="mt-1 mr-3 w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h4 class="font-bold text-sm text-slate-800">通用标注 (Auto-Labeling)</h4>
                                        <p class="text-xs text-slate-500 mt-1">利用大模型 (Teacher Model) 对原始图片生成 Caption 或 QA 对。例如，输入一张猫的图片，自动生成 "A fluffy cat sitting on a sofa."</p>
                                    </div>
                                </div>
                                <div class="flex items-start p-3 hover:bg-slate-50 rounded-lg transition">
                                    <div class="mt-1 mr-3 w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h4 class="font-bold text-sm text-slate-800">业务精调</h4>
                                        <p class="text-xs text-slate-500 mt-1">针对特定任务（如医疗、法律），加载专用词表进行特异性清洗。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
    },
    "module-C": {
        title: "C. 格式规范层 (Global Standards)",
        subtitle: "定义数据的“法律”：物理存储与逻辑结构的统一",
        content: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="font-bold text-lg mb-3 text-slate-800 flex items-center">
                                <i class="fa-solid fa-folder-tree text-green-500 mr-2"></i> 1. 文件规范分层
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div class="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:border-green-300 transition group">
                                    <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
                                        <i class="fa-solid fa-database text-xl text-green-500"></i>
                                    </div>
                                    <h4 class="font-bold text-slate-800 text-center mb-2">原始文件层</h4>
                                    <p class="text-xs text-slate-500 text-center">存储原始数据文件，保持数据完整性和可追溯性。</p>
                                </div>
                                <div class="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:border-green-300 transition group">
                                    <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
                                        <i class="fa-solid fa-file-alt text-xl text-green-500"></i>
                                    </div>
                                    <h4 class="font-bold text-slate-800 text-center mb-2">处理文件层</h4>
                                    <p class="text-xs text-slate-500 text-center">存储经过清洗、标注后的中间数据文件。</p>
                                </div>
                                <div class="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:border-green-300 transition group">
                                    <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
                                        <i class="fa-solid fa-check-circle text-xl text-green-500"></i>
                                    </div>
                                    <h4 class="font-bold text-slate-800 text-center mb-2">最终文件层</h4>
                                    <p class="text-xs text-slate-500 text-center">存储符合格式规范、可直接用于训练的最终数据文件。</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-bold text-lg mb-3 text-slate-800 flex items-center">
                                <i class="fa-solid fa-info-circle text-green-500 mr-2"></i> 2. 数据集元文件规范
                            </h3>
                            <div class="bg-[#282c34] rounded-lg p-4 shadow-inner overflow-hidden overflow-x-auto">
                                <pre><code class="language-json">
{
  "dataset_id": "mmu_image_text_v1.0.0",
  "version": "1.0.0",
  "name": "多模态理解图文数据集",
  "description": "包含10万对图文数据，用于训练视觉-语言理解模型",
  "creation_date": "2024-01-26",
  "modalities": ["image", "text"],
  "stats": {
    "total_samples": 100000,
    "image_resolution": {
      "min": [256, 256],
      "max": [1024, 1024],
      "mean": [512, 512]
    },
    "text_length": {
      "min": 10,
      "max": 200,
      "mean": 85
    }
  },
  "data_sources": ["huggingface", "internal"],
  "tags": ["multimodal", "vision-language", "clip"],
  "license": "internal"
}
                                </code></pre>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-bold text-lg mb-3 text-slate-800 flex items-center">
                                <i class="fa-solid fa-code text-green-500 mr-2"></i> 3. 数据样本规范
                            </h3>
                            <div class="bg-[#282c34] rounded-lg p-4 shadow-inner overflow-hidden overflow-x-auto">
                                <pre><code class="language-json">
{
  "sample_id": "uuid-1234567890abcdef1234567890abcdef",
  "media": {
    "image_path": "/dataset_root/multimodal_understanding/image_text_pairs/v1.0.0/images/001.jpg",
    "resolution": [512, 512],
    "format": "jpeg"
  },
  "annotations": [
    {
      "text": "一只可爱的小猫坐在沙发上",
      "language": "zh",
      "source": "human",
      "confidence": 0.98
    },
    {
      "text": "A cute cat sitting on a sofa",
      "language": "en",
      "source": "machine",
      "confidence": 0.95
    }
  ],
  "metadata": {
    "data_source": "internal",
    "collection_date": "2024-01-01",
    "region": "cn",
    "category": "animals"
  },
  "quality_score": 0.92
}
                                </code></pre>
                            </div>
                        </div>
                    </div>
                `
    },
    "module-D": {
        title: "D. 格式校验引擎 (Validation Engine)",
        subtitle: "自动化守门员：确保每一条数据都“合法”",
        content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 class="font-bold text-lg mb-4 text-slate-800">校验逻辑流程</h3>
                            <ol class="relative border-l border-slate-200 ml-3">
                                <li class="mb-8 ml-6">
                                    <span class="absolute flex items-center justify-center w-8 h-8 bg-white border border-slate-200 rounded-full -left-4 ring-4 ring-white shadow-sm">
                                        <i class="fa-solid fa-file-import text-blue-600 text-xs"></i>
                                    </span>
                                    <h4 class="font-bold text-slate-900">1. 输入触发</h4>
                                    <p class="text-sm text-slate-500 mt-1">当预处理层(B)产出新数据包时，自动触发校验Job。</p>
                                </li>
                                <li class="mb-8 ml-6">
                                    <span class="absolute flex items-center justify-center w-8 h-8 bg-white border border-slate-200 rounded-full -left-4 ring-4 ring-white shadow-sm">
                                        <i class="fa-solid fa-magnifying-glass text-yellow-600 text-xs"></i>
                                    </span>
                                    <h4 class="font-bold text-slate-900">2. 规则匹配</h4>
                                    <p class="text-sm text-slate-500 mt-1">拉取 C 层最新的 Schema 定义。</p>
                                </li>
                                <li class="ml-6">
                                    <span class="absolute flex items-center justify-center w-8 h-8 bg-white border border-slate-200 rounded-full -left-4 ring-4 ring-white shadow-sm">
                                        <i class="fa-solid fa-gavel text-green-600 text-xs"></i>
                                    </span>
                                    <h4 class="font-bold text-slate-900">3. 判定与反馈</h4>
                                    <p class="text-sm text-slate-500 mt-1">通过则入库(E)；失败则生成错误报告并驳回。</p>
                                </li>
                            </ol>
                        </div>
                        <div class="bg-slate-900 rounded-lg p-5 text-xs font-mono text-slate-300 shadow-xl border border-slate-800">
                            <div class="border-b border-slate-700 pb-2 mb-3 text-slate-500 flex justify-between">
                                <span>System Log: Validation Job #9921</span>
                                <span class="flex space-x-1.5">
                                    <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                                    <span class="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                                    <span class="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                                </span>
                            </div>
                            <div class="space-y-1.5">
                                <p><span class="text-blue-400">[INFO]</span> Loading schema v2.4...</p>
                                <p><span class="text-blue-400">[INFO]</span> Checking batch_001.jsonl...</p>
                                <p class="text-red-400 opacity-90">[ERROR] Row 402: Missing required field "image_height".</p>
                                <p class="text-red-400 opacity-90">[ERROR] Row 405: Field "text" contains illegal encoding.</p>
                                <p class="text-yellow-400 mt-2">[WARN] Batch rejected. 2 errors found.</p>
                                <p class="text-slate-500">[INFO] Report generated at /logs/val_9921.log</p>
                            </div>
                        </div>
                    </div>
                `
    },
    "module-E": {
        title: "E. 数据存储与类型分层",
        subtitle: "结构化数据仓库：分类索引与版本控制",
        content: `
                    <div class="space-y-6">
                         <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-white p-5 border border-slate-200 rounded-xl shadow-sm text-center hover:border-purple-300 transition">
                                <div class="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <i class="fa-solid fa-brain text-xl text-purple-500"></i>
                                </div>
                                <h4 class="font-bold text-slate-800">理解类数据</h4>
                                <p class="text-xs text-slate-500 mt-1 px-2">图文强关联，用于CLIP/BLIP模型训练。</p>
                            </div>
                            <div class="bg-white p-5 border border-slate-200 rounded-xl shadow-sm text-center hover:border-pink-300 transition">
                                <div class="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <i class="fa-solid fa-paintbrush text-xl text-pink-500"></i>
                                </div>
                                <h4 class="font-bold text-slate-800">生成类数据</h4>
                                <p class="text-xs text-slate-500 mt-1 px-2">图文对齐 + 扩散模型专用Target。</p>
                            </div>
                             <div class="bg-white p-5 border border-slate-200 rounded-xl shadow-sm text-center hover:border-slate-300 transition">
                                <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <i class="fa-solid fa-database text-xl text-slate-500"></i>
                                </div>
                                <h4 class="font-bold text-slate-800">元数据 (Metadata)</h4>
                                <p class="text-xs text-slate-500 mt-1 px-2">记录血缘关系：Source -> Process -> Final。</p>
                            </div>
                        </div>

                        <div class="bg-white border border-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 class="font-bold text-slate-800 mb-4 flex items-center">
                                <i class="fa-solid fa-layer-group text-slate-400 mr-2"></i> 分层管理策略
                            </h3>
                            <div class="space-y-2">
                                <div class="flex items-center justify-between p-3 rounded bg-slate-50 border border-slate-100">
                                    <div class="flex items-center"><i class="fa-solid fa-fire text-red-500 mr-3 w-4"></i> <span class="text-sm font-bold text-slate-700">Hot Storage (SSD)</span></div>
                                    <span class="text-xs text-slate-500">最近3个月的高频训练数据</span>
                                </div>
                                <div class="flex items-center justify-between p-3 rounded bg-slate-50 border border-slate-100">
                                    <div class="flex items-center"><i class="fa-solid fa-temperature-half text-orange-500 mr-3 w-4"></i> <span class="text-sm font-bold text-slate-700">Warm Storage (HDD)</span></div>
                                    <span class="text-xs text-slate-500">历史版本数据，用于对比实验</span>
                                </div>
                                <div class="flex items-center justify-between p-3 rounded bg-slate-50 border border-slate-100">
                                    <div class="flex items-center"><i class="fa-solid fa-snowflake text-blue-400 mr-3 w-4"></i> <span class="text-sm font-bold text-slate-700">Cold Archive (Tape)</span></div>
                                    <span class="text-xs text-slate-500">原始Raw数据备份，低成本长期留存</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `
    },
    "module-F": {
        title: "F. 数据分析层 (ANGEL)",
        subtitle: "数据分析生成层：通过图表洞察数据分布",
        content: `
                    <div class="space-y-6">
                        <!-- Simulated Charts -->
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
                                <h4 class="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">文本长度分布</h4>
                                <div class="flex items-end space-x-2 h-32 px-2">
                                    <div class="w-1/6 bg-blue-200 h-[20%] rounded-t-sm"></div>
                                    <div class="w-1/6 bg-blue-300 h-[40%] rounded-t-sm"></div>
                                    <div class="w-1/6 bg-blue-500 h-[80%] rounded-t-sm relative group cursor-pointer hover:bg-blue-600 transition">
                                        <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition">45%</div>
                                    </div>
                                    <div class="w-1/6 bg-blue-600 h-[60%] rounded-t-sm"></div>
                                    <div class="w-1/6 bg-blue-400 h-[30%] rounded-t-sm"></div>
                                    <div class="w-1/6 bg-blue-200 h-[10%] rounded-t-sm"></div>
                                </div>
                                <div class="flex justify-between text-[10px] text-slate-400 mt-2 border-t border-slate-100 pt-2">
                                    <span>Short</span>
                                    <span>Long</span>
                                </div>
                            </div>
                            <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
                                <h4 class="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider w-full text-left">图片类别占比</h4>
                                <div class="relative h-32 w-32 mx-auto rounded-full border-[12px] border-slate-50 flex items-center justify-center">
                                    <div class="absolute inset-0 rounded-full border-[12px] border-purple-500 border-t-transparent border-l-transparent transform rotate-45"></div>
                                    <span class="text-2xl font-bold text-slate-700">62%</span>
                                </div>
                                <p class="text-center text-xs text-slate-500 mt-2">人物类 (People)</p>
                            </div>
                        </div>

                        <div class="bg-slate-50 border border-slate-200 p-5 rounded-lg">
                            <h4 class="font-bold text-sm mb-3 text-slate-700">样本预览 (Sample Viewer)</h4>
                            <div class="flex space-x-4 overflow-x-auto pb-2">
                                <div class="w-32 h-32 flex-shrink-0 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-300 shadow-sm">IMG_001</div>
                                <div class="w-32 h-32 flex-shrink-0 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-300 shadow-sm">IMG_002</div>
                                <div class="w-32 h-32 flex-shrink-0 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-300 shadow-sm">IMG_003</div>
                                <div class="w-32 h-32 flex-shrink-0 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-300 shadow-sm">IMG_004</div>
                            </div>
                        </div>
                    </div>
                `
    },
    "module-G": {
        title: "G. 评测系统 (DEVIL)",
        subtitle: "双维度评测系统：Benchmark与评估报告",
        content: `
                    <div class="space-y-6">
                        <div class="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                            <table class="min-w-full text-sm text-left">
                                <thead class="bg-slate-50 text-slate-500 font-bold">
                                    <tr>
                                        <th class="px-5 py-3 font-semibold">数据集</th>
                                        <th class="px-5 py-3 font-semibold">类型</th>
                                        <th class="px-5 py-3 font-semibold">指标</th>
                                        <th class="px-5 py-3 font-semibold">状态</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100 bg-white">
                                    <tr class="hover:bg-slate-50 transition">
                                        <td class="px-5 py-3">COCO_Val</td>
                                        <td class="px-5 py-3 text-slate-500">理解类</td>
                                        <td class="px-5 py-3 font-mono text-xs text-slate-500">mAP / Recall</td>
                                        <td class="px-5 py-3"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Ready</span></td>
                                    </tr>
                                    <tr class="hover:bg-slate-50 transition">
                                        <td class="px-5 py-3">Internal_Gen_V2</td>
                                        <td class="px-5 py-3 text-slate-500">生成类</td>
                                        <td class="px-5 py-3 font-mono text-xs text-slate-500">FID / CLIP Score</td>
                                        <td class="px-5 py-3"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">Updating</span></td>
                                    </tr>
                                    <tr class="hover:bg-slate-50 transition">
                                        <td class="px-5 py-3">MMBench</td>
                                        <td class="px-5 py-3 text-slate-500">多模态逻辑</td>
                                        <td class="px-5 py-3 font-mono text-xs text-slate-500">Accuracy</td>
                                        <td class="px-5 py-3"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Ready</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-400 flex items-start">
                            <i class="fa-solid fa-triangle-exclamation text-orange-500 mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-bold text-orange-900 mb-1">小模型验证机制 (Proxy Evaluation)</h4>
                                <p class="text-sm text-orange-800 opacity-90">在全量训练前，使用 1B 参数量级的小模型在当前数据切片上跑 1 Epoch，如果 Loss 收敛曲线异常，则自动标记该批数据为“低质”，不进入全量训练。</p>
                            </div>
                        </div>
                    </div>
                `
    },
    "module-H": {
        title: "H. 模型训练对接层",
        subtitle: "DataLoader 与高效采样接口",
        content: `
                    <div class="space-y-6">
                        <p class="text-sm text-slate-600">该层提供 Python SDK，使算法工程师无需关心底层文件存储细节，直接以 Stream 流形式读取数据。</p>

                        <div class="relative group">
                            <div class="absolute top-0 right-0 bg-slate-700 text-slate-300 text-[10px] px-2 py-1 rounded-bl rounded-tr z-10 font-mono">train_loader.py</div>
                            <div class="bg-[#282c34] rounded-lg shadow-md overflow-hidden p-4 overflow-x-auto">
                                <pre><code class="language-python bg-transparent p-0">
class MultiModalDataset(IterableDataset):
    def __init__(self, data_path, strategy="balanced"):
        self.data_shards = list_files(data_path)
        self.strategy = strategy

    def __iter__(self):
        worker_info = torch.utils.data.get_worker_info()
        # 自动分配分片给不同的 GPU Worker
        my_shards = distribute_shards(self.data_shards, worker_info)

        for shard in my_shards:
            # 增量流式读取，不占用内存
            for sample in read_protobuf_stream(shard):
                if self.strategy == "balanced":
                    # 实现类型平衡采样逻辑
                    if not self.check_balance(sample): continue

                yield transform(sample)

# 使用示例
loader = DataLoader(
    MultiModalDataset("s3://bucket/v2.0", strategy="hard_mining"),
    batch_size=256,
    num_workers=8
)
                                </code></pre>
                            </div>
                        </div>

                         <div class="flex gap-4 text-sm mt-2">
                            <div class="flex-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-cyan-300 transition">
                                <span class="block font-bold text-slate-700 mb-1 flex items-center"><i class="fa-solid fa-clock-rotate-left mr-2 text-cyan-600"></i>支持增量加载</span>
                                <span class="text-slate-500 text-xs">仅加载新增的时间分区数据。</span>
                            </div>
                            <div class="flex-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-cyan-300 transition">
                                <span class="block font-bold text-slate-700 mb-1 flex items-center"><i class="fa-solid fa-filter mr-2 text-cyan-600"></i>自定义采样</span>
                                <span class="text-slate-500 text-xs">按领域权重重采样 (Reweighting)。</span>
                            </div>
                        </div>
                    </div>
                `
    },
    "module-I": {
        title: "I. 训练框架层",
        subtitle: "多框架支持与训练加速",
        content: `
                    <div class="space-y-6">
                        <p class="text-sm text-slate-600">该层提供对主流深度学习框架的原生支持，并针对多模态数据训练进行了深度优化，提供训练加速、分布式训练和混合精度训练等功能。</p>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:border-violet-300 transition group">
                                <div class="w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
                                    <i class="fa-solid fa-brain text-xl text-violet-500"></i>
                                </div>
                                <h4 class="font-bold text-slate-800 text-center mb-2">PyTorch 支持</h4>
                                <p class="text-xs text-slate-500 text-center">完全兼容 PyTorch 生态，提供优化后的 DataLoader 和训练循环。</p>
                            </div>
                            <div class="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:border-violet-300 transition group">
                                <div class="w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
                                    <i class="fa-solid fa-chart-line text-xl text-violet-500"></i>
                                </div>
                                <h4 class="font-bold text-slate-800 text-center mb-2">TensorFlow 支持</h4>
                                <p class="text-xs text-slate-500 text-center">支持 TensorFlow/Keras 训练流程，包括 TFRecord 数据格式。</p>
                            </div>
                            <div class="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:border-violet-300 transition group">
                                <div class="w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
                                    <i class="fa-solid fa-code-branch text-xl text-violet-500"></i>
                                </div>
                                <h4 class="font-bold text-slate-800 text-center mb-2">自定义框架</h4>
                                <p class="text-xs text-slate-500 text-center">提供通用接口，支持自定义训练框架集成。</p>
                            </div>
                        </div>

                        <div class="bg-violet-50 p-5 rounded-lg border-l-4 border-violet-500 flex items-start">
                            <i class="fa-solid fa-rocket text-violet-500 mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-bold text-violet-900 text-sm mb-1">训练加速策略</h4>
                                <p class="text-sm text-violet-800 opacity-90">集成多种训练加速技术，包括自动混合精度训练(AMP)、梯度累积、分布式训练等，显著缩短训练时间。</p>
                            </div>
                        </div>

                        <div class="bg-[#282c34] rounded-lg shadow-md overflow-hidden p-4 overflow-x-auto">
                            <pre><code class="language-python bg-transparent p-0">
from training_framework import Trainer, TrainingConfig

# 配置训练参数
config = TrainingConfig(
    model_name="clip-vit-base",
    dataset_path="s3://bucket/v2.0",
    batch_size=256,
    epochs=10,
    mixed_precision=True,
    distributed=True,
    num_nodes=8,
    gpus_per_node=8
)

# 初始化训练器
trainer = Trainer(config)

# 开始训练
trainer.train()

# 保存模型
trainer.save_model("output/clip-vit-base")
                            </code></pre>
                        </div>
                    </div>
                `
    }
};
