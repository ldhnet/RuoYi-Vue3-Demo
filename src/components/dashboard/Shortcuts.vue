<!--
 * @Author: lidonghui
 * @Date: 2024-08-08 15:09:41
 * @LastEditTime: 2024-08-08 15:09:41  
 * @FilePath: \components\dashboard\LiveChart.vue
-->
<template>
    <el-row :gutter="20">
        <el-col :md="6">
            <div class="ve-card ve_card1">
                <el-icon>
                    <football />
                </el-icon>
                <div>
                    <p>菜单数量</p>
                    <span>6</span>
                </div>
            </div>
        </el-col>
        <el-col :md="6">
            <div class="ve-card ve_card2">
                <el-icon>
                    <user />
                </el-icon>
                <div>
                    <p>用户数量</p>
                    <span>6</span>
                </div>
            </div>
        </el-col> 
        <el-col :md="6">
            <div class="ve-card ve_card3">
                <el-icon>
                    <ice-cream />
                </el-icon>
                <div>
                    <p>角色数量</p>
                    <span>6</span>
                </div>
            </div>
        </el-col>
        <el-col :md="6">
            <div class="ve-card ve_card4">
                <el-icon>
                    <document />
                </el-icon>
                <div>
                    <p>资料数量</p>
                    <span>6</span>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<!-- <script setup></script> -->

<style lang="scss" scoped>
.el-row {
    height: 50%; 
    padding-right: 10px;   
}
.el-col {  
    margin-bottom: 10px;
}
.ve-card {
    border-radius: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 500ms;
    color: #fff;
    &:hover {
        box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.2);
        background: #fff;
    }
    i {
        font-size: 90px;
        margin: 10px 20px;
    }
    div {
        flex: 1;
        padding-right: 12px;
        p {
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        span {
            font-size: 60px;
            font-weight: bold;
        }
    }
}
.ve_card1 {
    background: #409eff;
    &:hover {
        color: #409eff;
    }
}
.ve_card2 {
    background: #67c23a;
    &:hover {
        color: #67c23a;
    }
}
.ve_card3 {
    background: #e6a23c;
    &:hover {
        color: #e6a23c;
    }
}
.ve_card4 {
    background: #f56c6c;
    &:hover {
        color: #f56c6c;
    }
}
</style>
