<template>
    <div>  
        <el-card>
            <template v-slot:header>
                <div class="clearfix">
                    <span>考勤管理（4）</span>
                </div>
            </template>
            <el-row :gutter="10">
                <el-col :md="6" v-for="(item, index) in flowList">
                    <el-card shadow="always" class="card-col" @click="handleFlow">
                        <div slot="title">
                            <div class="card-icon">
                                <el-avatar size="large" :src="item.IconUrl" />
                            </div>
                            <div class="card-title">
                                <a>{{ item.title }}</a>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
        <el-card>
            <template v-slot:header>
                <div class="clearfix">
                    <span>人事管理（5）</span>
                </div>
            </template>
            <el-row :gutter="10">
                <el-col :md="6" v-for="(item, index) in hrList">
                    <el-card shadow="always" class="card-col" @click="handleFlow">
                        <div slot="title">
                            <div class="card-icon">
                                <el-avatar size="large" :src="item.IconUrl" />
                            </div>
                            <div class="card-title">
                                <a>{{ item.title }}</a>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>

    </div>
</template>

<script setup>
import { onMounted } from 'vue' 
const { proxy } = getCurrentInstance(); 

function handleFlow(row) {
    proxy.$modal.msgSuccess("演示环境努力开发中！");
}

const flowList = [
    {
        title: "请假申请",
        description: "请假申请流程办理",
        IconUrl:getAssetsFile("leave")  
    },
    {
        title: "加班申请",
        description: "加班申请流程办理",
        IconUrl:getAssetsFile("person")  
    },
    {
        title: "打卡申诉",
        description: "打卡申诉流程办理",
        IconUrl:getAssetsFile("daka")   
    },
    {
        title: "工时录入",
        description: "工时录入流程办理",
        IconUrl: getAssetsFile("overtime")  
    }
];

const hrList = [
    {
        title: "人员入职流程",
        description: "人员入职流程办理",
        IconUrl: getAssetsFile("richang") 
    },
    {
        title: "人员转正流程",
        description: "人员转正流程办理",
        IconUrl:getAssetsFile("zhushou") 
    },
    {
        title: "人员离职流程",
        description: "人员离职流程办理",
        IconUrl:getAssetsFile("worktile") 
    },
    {
        title: "人员离职交接流程",
        description: "人员离职交接流程办理",
        IconUrl: getAssetsFile("icon-manage-04") 
    },
    {
        title: "部门调动流程",
        description: "部门调动流程办理",
        IconUrl: getAssetsFile("jiejing")
    }
];
 
let statusColor = {
  "LEAVE_WMA": 'leave', 
  "DSFZH_WMA": 'jiejing',
}; 
 
onMounted(() => {  
});
 

 function getAssetsFile(pathUrl) { 
    return new URL(`../../assets/images/work/${pathUrl}.png`, import.meta.url).href;
 }
  
</script>
<style lang="scss" scoped>
.card-col {
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
        background: rgba(0, 0, 0, 0.45);

        .card-title a,
        p {
            color: #ffff;
        }
    }

}

.card-title {
    float: left;
    margin-left: 15px;

    a {
        margin-bottom: 8px;
        font-size: 14px;
        color: #1890ff;
        overflow: hidden;
    }

    p {
        font-size: 12px;
        font-weight: 300;
        overflow: hidden;
    }
}

.card-icon {
    float: left;
    transform: translate(5%, -10%);
}
</style>