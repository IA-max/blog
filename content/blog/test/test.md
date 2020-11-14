---
title: test
date: '2020-03-19T19:16:30+08:00'
status: private
permalink: /test
author: admin
excerpt: ''
type: post
id: 3534
category:
    - 未分类
tag: []
post_format: []
---
```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""><template>
  <div
    ref="listTable"
    :style="{
      display: tableDisplay,
      height: wrapHeight
    }"
    class="commonlist-table commonlist-table-self">
    <el-table
      v-if="colsVerificationPass"
      border
      ref="table"
      :empty-text="showEmptyText?$t('title.noData'):' '"
      :fit="fit"
      :stripe="stripe"
      :height="height"
      :data="tableList"
      :cell-style="cellStyle"
      :max-height="maxHeight"
      :span-method="spanMethod"
      :cell-class-name="cellClassName"
      :row-class-name="tableRowClassName"
      :highlight-current-row="highlightCurrentRow"
      @select="selectRow"
      @select-all="selectAllRow"
      @sort-change="sortChange"
      @selection-change="handleSelectionChange"
      @row-contextmenu="contextmenu">
      <!-- 多选 -->
      <el-table-column
        v-if="canSelection"
        :selectable='selectable'
        type="selection"
        align="center"
        width="55">
        <template
          slot="header"
          slot-scope="scope">
          <span
            v-if="hasQueryfilter"
            class="commonlist-table__filterwrap">
            <el-input disabled />
          </span>
          <span
            :title="col.labelName || $t('tableHeader.sn')"
            class="commonlist-table__headerlabel ellipsis"
            v-html="col.labelName || $t('tableHeader.sn')"
          ></span>
        </template>
      </el-table-column>
      <template v-for="(col, index) in cols">
        <!-- 序号 -->
        <el-table-column
          v-if="col.htmlType === 'INDEX'"
          align="center"
          :type="col.htmlType"
          :width="col.width || 50"
          :key="index">
          <template
            slot="header"
            slot-scope="scope">
            <span
              v-if="hasQueryfilter"
              class="commonlist-table__filterwrap">
              <el-input disabled />
            </span>
            <span
              :title="col.labelName || $t('tableHeader.sn')"
              class="commonlist-table__headerlabel ellipsis"
              v-html="col.labelName || $t('tableHeader.sn')"
            ></span>
          </template>
          <template
            slot-scope="scope">
            <span>{{scope.$index + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="index"
          :label="col.labelName"
          :prop="col.searchName"
          :align="getColcenter(col)"
          :sortable="col.canSort ? 'custom' : false"
          :min-width="getColWidth(col.width)"
          :show-overflow-tooltip="showOverflowTooltip"
          :header-align="col.headerAlign || col.align || 'center'">
          <template slot="header" slot-scope="scope">
            <span
              v-if="hasQueryfilter"
              @click.stop="hideSelectTreePop"
              class="commonlist-table__filterwrap">
              <!-- 文本类型 -->
              <el-input
                v-if="col.htmlType === 'TEXT' && col.canSearch"
                :clearable="!!queryParams[col.searchName]"
                v-model="queryParams[col.searchName]"
                @clear="initTableList(1)"
                @keyup.enter.native="initTableList(1)"/>
              <!-- 树下拉 -->
              <select-tree
                v-else-if="col.htmlType === 'SELECT' && col.canSearch"
                :treeData="col.dataSource || []"
                :disabled="col.disabled"
                :multiple="col.isMultiply === 'Y'"
                :defaultProps="col.defaultProps"
                :service="col.selectService || []"
                :params="col.selectParams || {}"
                :strictly="col.strictly || false"
                v-model="queryParams[col.searchName]"
                @target-click="selectTreeClick"
                @visible-change="closeContextMenu"
                :disabledList="col.disabledList || []"
                @change="selectTreeChange($event, col)"
              ></select-tree>
              <!-- 项目弹框 -->
              <project-picker
                v-else-if="col.htmlType === 'PROJECT'"
                v-model="queryParams[col.searchName]"
                @opened="closeContextMenu"
                @change="initTableList(1)"
              ></project-picker>
              <!-- 人员弹框 -->
              <user-picker
                v-else-if="col.htmlType === 'USER' && col.canSearch"
                valueKey="id"
                labelKey="name"
                @keyup.enter.native="initTableList(1)"
                v-model="queryParams[col.searchName]"
                @opened="closeContextMenu"
                @change="initTableList(1)"
              ></user-picker>
              <!-- 部门弹框 -->
              <department-picker
                v-else-if="col.htmlType === 'DEPARTMENT' && col.canSearch"
                :currentUserDept="true"
                v-model="queryParams[col.searchName]"
                @opened="closeContextMenu"
                @change="initTableList(1)"
              ></department-picker>
              <!-- 日期 -->
              <daterange-select
                v-else-if="col.htmlType === 'DATE' && col.canSearch"
                ref="daterangeSelectRef"
                :type="col.dataType ? col.dataType : 'date'"
                :value-format="col.valueFormat ? col.valueFormat : 'yyyy-MM-dd'"
                :closePopBus="closePopBus"
                @change="initTableList(1)"
                @focus="closeContextMenu"
                v-model="queryParams[col.searchName]"
              ></daterange-select>
              <!-- 数字 -->
              <template v-else-if="col.htmlType === 'NUMBER' && col.canSearch">
                <number-range
                  v-model="queryParams[col.searchName]"
                  @change="selectedNumber"
                ></number-range>
              </template>
              <!-- 其他类型 -->
              <el-input v-else disabled/>
            </span>
            <span class="commonlist-table__headerlabel">
              <!-- 星星 -->
              <span v-if="col.htmlType === 'FOCUS'">
                <i
                  class = 'icon-cursor'
                  :class="[queryParams[col.searchName] === '1' ? 'el-icon-star-on' : 'el-icon-star-off']"
                  @click="focusFilter(col.searchName)"
                ></i>
              </span>
              <!-- 指示灯 -->
              <template v-else-if="col.htmlType === 'LIGHT'">
                <div v-popover:LIGHT class='cursor commonlist-table__light'>
                  <template v-if="isReport">
                    {{col.labelName}}
                    <a><i class=" el-icon-question"></i></a>
                  </template>
                  <i v-else class="iconfont icon-light-thin" :title="col.labelName"></i>
                </div>
                <el-popover
                  width="380"
                  ref="LIGHT"
                  placement="bottom"
                  trigger="click">
                  <light-tip v-if="lighetTipType ==='task'"></light-tip>
                  <project-light-tip v-if="lighetTipType ==='project'" />
                </el-popover>
              </template>
              <span v-else-if="col.htmlType === 'COUNTDOWN'">
                <div v-popover:COUNTDOWN_TIP class= 'cursor'>
                  {{col.labelName}}
                  <a><i class=" el-icon-question"></i></a>
                </div>
                <el-popover
                  width="480"
                  ref="COUNTDOWN_TIP"
                  placement="bottom"
                  trigger="click">
                  <countdown-tip></countdown-tip>
                </el-popover>
              </span>
              <span
                v-else
                class="ellipsis"
                :title="col.labelName"
                v-html="col.labelName"
              ></span>
            </span>
          </template>
          <template slot-scope="scope">
            <!-- 星星 -->
            <i
              v-if="col.htmlType === 'FOCUS'"
              class = 'icon-cursor'
              :class="getFocusClass(scope.row[col.searchName])"
              @click="focusSetting(scope.row, scope.$index, col.searchName)"
            ></i>
            <!-- 置顶 -->
            <span
              v-else-if="col.htmlType === 'TOP'"
              class="commonlist-table-self__topwrap"
              :style="{'transform': scope.row.showCancelTopIcon ? 'rotate(180deg)' : 'rotate(0deg)'}"
              @mouseout="mouseoutTop(scope.row, scope.$index)"
              @mouseover="mouseoverTop(scope.row, scope.$index, col.searchName)">
              <i
                v-show="scope.row[col.searchName] && !scope.row.showCancelTopIcon"
                class="iconfont icon-zhiding"
              ></i>
              <i
                v-show="scope.row.showCancelTopIcon"
                :title="$t('button.cancelTop')"
                class="iconfont icon-zhiding"
                @click="setTop(scope.row, false)"
              ></i>
              <i
                v-show="scope.row.showSetTopIcon"
                :title="$t('button.top')"
                class="iconfont icon-zhiding"
                @click="setTop(scope.row, true)"
              ></i>
            </span>
            <!-- 指示灯 -->
            <i
              v-else-if="col.htmlType === 'LIGHT' && !col.lightHtml"
              :style="getDotStyle(scope.row[col.searchName])"
              class="commonlist-table__dot"
            ></i>
            <!-- 链接 -->
            <a
              v-else-if="linkFilter(col,scope.row) && (!col.isShowLinkFn || col.isShowLinkFn(scope.row))"
              class="cursor"
              :class="{ 'commonlist-table__ellipsis': !showOverflowTooltip }"
              :title="scope.row[col.searchName] | arrayToString"
              @click="goPage(scope.row, col.linkParamsOptions,col.linkEvent)">
              {{ scope.row[col.searchName] | arrayToString }}
            </a>
            <!-- 锁和链接 （文档的名称有用到） -->
            <template v-else-if="col.isLockLink">
              <!-- isShowLinkFn 控制权限，有权限才能查看 -->
              <a
                v-if="!col.isShowLinkFn || col.isShowLinkFn(scope.row)"
                class="cursor"
                :class="{ 'commonlist-table__ellipsis': !showOverflowTooltip }"
                @click="goPage(scope.row, col.linkParamsOptions,col.linkEvent)">
                <i
                  class="iconfont"
                  :title="scope.row.lockTitle"
                  :class="scope.row.lockClassName"
                  @click.stop="customIconClick(scope.row, col, scope.$index)"/>
                <span :title="scope.row[col.searchName] | arrayToString">
                  {{ scope.row[col.searchName] | arrayToString }}
                </span>
              </a>
              <span
                v-else
                :class="{ 'commonlist-table__ellipsis': !showOverflowTooltip }">
                <i
                  class="iconfont"
                  :class="scope.row.lockClassName"
                  @click="customIconClick(scope.row, col, scope.$index)"/>
                <span :title="scope.row[col.searchName] | arrayToString">
                  {{ scope.row[col.searchName] | arrayToString }}
                </span>
              </span>
            </template>
            <!-- 人员  -->
            <user-msg
              v-else-if="col.htmlType === 'USER'"
              class="commonlist-table__ellipsis"
              :title="scope.row[col.searchName] | arrayToString"
              :userData="scope.row[col.searchName] || []"
            ></user-msg>
            <!-- 操作 -->
            <span class="operation__wrap" v-else-if="col.htmlType === 'OPERATION'" :class="{'disabled': scope.row[isValidKey] === 'N'}">
              <!-- <template v-for="(item, i) in scope.row.operationShow"> -->
                <i
                  v-if="col.copy !== 'copy'"
                  :title="$t('button.copy')"
                  @click="operationFn('copy', scope.row)"
                  class="icon iconfont icon-copy">
                </i>
                <i
                  :title="$t('button.edit')"
                  @click="operationFn('edit', scope.row)"
                  class="el-icon-edit">
                </i>
                <i
                  :title="$t('button.cancel')"
                  v-if="!isNotCancel"
                  @click="operationFn('cancel', scope.row)"
                  class="icon iconfont icon-retract">
                </i>
              <!-- </template> -->
            </span>
            <!-- 附件 -->
            <i
              v-else-if="col.htmlType === 'ATTACH' && scope.row[col.searchName]"
              class="iconfont icon-attachment link-color"
              @click="clickAttach(scope.row)"
            ></i>
            <!-- 自定义icon -->
            <span v-else-if="col.htmlType === 'customIcon' && col.customIconOption.iconClass" class="customIcon">
              <i
                v-show="!col.customIconOption.isShowIconFn || col.customIconOption.isShowIconFn(scope.row, col)"
                :class="[col.customIconOption.iconClass, {'link-color': col.customIconOption.isLink }]"
                @click="customIconClick(scope.row, col, scope.$index)"
              ></i>
            </span>
            <!-- 多个icon -->
            <span v-else-if="col.htmlType === 'batchIcon' && col.iconList && col.iconList.length" class="link-color">
              <i v-for="(icon, iconIndex) in col.iconList"
                v-show="!icon.isShowIconFn || icon.isShowIconFn(scope.row)"
                :key="`${index}-${iconIndex}`"
                class="batchicon"
                :class="icon.iconClass"
                :title="icon.customIconOption && icon.customIconOption.iconTitle"
                @click="customIconClick(scope.row, icon, scope.$index)" />
            </span>
             <!-- 自定义 buttom -->
            <span v-else-if="col.htmlType === 'customButtom'">
              <template v-for="(button,i) in col.customButtonOption">
                                                                                 <!-- 隐藏按钮  hiddebButton0  hiddebButton1 hiddebButton2-->
                 <el-button :key="i" @click="customButtonClick(scope.row, button)" v-if="!scope.row['hiddebButton'+i]"
                 :type="button.type" plain :title="button.title">{{button.text}}</el-button>
              </template>
            </span>
            <!-- 倒计时进度条，正负都按照最大365天来计算, 如果如果小于18按照5%大于18小于等于36按照10，那么就 -->
            <!--  isCommApp = "Y"的话就是投产鉴定，N不是投产鉴定 -->
            <el-progress
              v-else-if="col.htmlType === 'COUNTDOWN'&&scope.row.isCommApp === 'N'"
              :color="+scope.row[col.searchName]<0?'#FA7570':(+scope.row[col.searchName]>7?'#67C23A':'#FFBD32')"
              :percentage="Math.abs(+scope.row[col.searchName])>360?100:(Math.abs(+scope.row[col.searchName])<18?5:Math.abs(scope.row[col.searchName])*100/365)"
              status="text"
            >{{scope.row[col.searchName]}}</el-progress>
            <el-progress
              v-else-if="col.htmlType === 'COUNTDOWN'&&scope.row.isCommApp === 'Y'"
              :color="+scope.row[col.searchName]<0?'#FA7570':(+scope.row[col.searchName]>30?'#67C23A':'#FFBD32')"
              :percentage="Math.abs(+scope.row[col.searchName])>360?100:(Math.abs(+scope.row[col.searchName])<18?5:Math.abs(scope.row[col.searchName])*100/365)"
              status="text"
            >{{scope.row[col.searchName]}}</el-progress>
            <span
              v-else-if="col.htmlTypeAREA === 'AREA'"
              :title="getTextByHtml(scope.row[col.searchName])"
              v-html="scope.row[col.searchName]"
              class="commonlist-table__ellipsis">
            </span>
            <span
              v-else-if="showhtml"
              :title="getTextByHtml(scope.row[col.searchName])"
              v-html="scope.row[col.searchName]"
              :class="{ 'commonlist-table__ellipsis': !showOverflowTooltip }">
            </span>
            <span
              v-else
              :title="scope.row[col.searchName] | arrayToString"
              :class="{ 'commonlist-table__ellipsis': !showOverflowTooltip }">
              {{ scope.row[col.searchName] | arrayToString }}
              <span v-if="scope.row[col.searchName] && col.showPercent === 'Y'">%</span>
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <slot></slot>
    <el-pagination
      v-if="tableList&&tableList.length && !hidePagination"
      background
      align='right'
      :total="pageOptions.total"
      :layout="pageOptions.layout"
      :page-sizes="pageOptions.pageSizes"
      :page-size.sync="pageOptions.pageSize"
      :current-page.sync="pageOptions.pageNumber"
      @current-change="initTableList"
      @size-change="initTableList(1)"
    ></el-pagination>
    <!-- 右键菜单 -->
    <table-context-menu
      ref="tablecontextmenuRef"
      :axis="contextMenuData.axis"
      :menu="contextMenuData.menu"
      :customEvent="contextMenuData.customEvent"
    ></table-context-menu>
    <!-- 附件查看 -->
    <AttachmentDialog :dialogVisible.sync="attachVisible" :tableData="attachTableData" v-bind="$attrs"/>
  </div>
</template>
<script>
import moment from 'moment';
import scrollBar from '@/mixins/scrollBar.js';
import closePopBus from '@/mixins/closePopBus.js';
import itemSetTablistMixins from '@/mixins/itemSetTablistMixins.js';
import LightTip from '@/components/common/LightTip';
import ProjectLightTip from '@/components/common/projectLightTip';
import CountdownTip from '@/components/common/CountdownTip';
import UserPicker from '@/components/select/UserPicker';
import NumberRange from '@/components/common/NumberRange';
import ProjectPicker from '@/components/select/ProjectPicker';
import AttachmentDialog from '@/components/upload/view/view.vue';
import DaterangeSelect from '@/components/common/DaterangeSelect';
import DepartmentPicker from '@/components/select/DepartmentPicker';
import TableContextMenu from '@/components/ContextMenu/TableContextMenu';
import { isArray, isFunction, getSubmitVal, isArrayObject, isObject, clone, getTextByHtml } from '@/util/utils.js';
const colsType = [
  'INDEX', // 序号
  'FOCUS', // 星星 （设置重点）
  'LIGHT', // 指示灯
  'USER', // 人员
  'NUMBER', // 数字
  'DATE', // 日期
  'DEPARTMENT', // 部门
  'PROJECT', // 项目
  'TOP', // 项目
  'SELECT', // 下拉
  'ATTACH', // 附件
  'TEXT', // 文本
  'COUNTDOWN', // 倒计时
  'OPERATION', // 操作
  'customIcon', // 自定icon
  'batchIcon', // 多个icon
];
export default {
  data() {
    return {
      showEmptyText: false, // 加载页面 隐藏  暂无数据
      contextMenuData: {
        axis: { x: null, y: null },
        menu: []
      },
      colsVerificationPass: false,
      tableList: [],
      selectData: [], // 多选选中的数据
      minWidth: {
        NUMBER: 140,
        LIGHT: 80,
        ATTACH: 80,
        USER: 80,
        DATE: this.dateMinWidth || 220
      },
      pageOptions: {
        total: 0,
        pageSize: 50,
        pageNumber: 1,
        pageService: '',
        pageSizes: [20, 30, 50],
        layout: 'prev, pager, next, sizes, total'
      },
      // 排序参数
      sortParams: {
        orderField: '',
        orderType: ''
      },
      // 查询参数
      queryParams: {},
      attachVisible: false, // 附件弹框
      attachTableData: []
    };
  },
  mixins: [scrollBar, closePopBus, itemSetTablistMixins],
  components: {
    LightTip,
    CountdownTip,
    UserPicker,
    NumberRange,
    ProjectPicker,
    DaterangeSelect,
    DepartmentPicker,
    TableContextMenu,
    AttachmentDialog,
    ProjectLightTip
  },
  props: {
    // 分页信息（组件自定义的属性）
    page: {
      type: [Object],
      default: _ => { return { pageService: '' }; }
    },
    // 是否报表用到
    isReport: {
      type: Boolean,
      default: false
    },
    // 查询列表的时候，总数的key
    totalKey: {
      type: Array,
      default: _ => ['count']
    },
    // 查询列表的时候，列表的key
    listKey: {
      type: Array,
      default: _ => ['data']
    },
    // 过滤查询条件
    filterParams: [Function],
    // 过滤返回数据
    filterData: [Function],
    // 合并行或列的计算方法
    spanMethod: [Function],
    // 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。
    cellStyle: [Function, String],
    // 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。
    cellClassName: [Function, String],
    // 行的className的回调方法
    tableRowClassName: [Function],
    // 多选禁用
    selectable: [Function],
    // 查询列表的其他参数
    otherParams: {
      type: [Object],
      default: _ => {}
    },
    defaultQueryParams: {
      type: [Object],
      default: _ => {}
    },
    // 查询条件发生变化，是否查询列表，默认查询
    queryChangeNosearch: {
      type: [Array],
      default: _ => []
    },
    // 当内容过长被隐藏时显示 tooltip
    showOverflowTooltip: {
      type: [Boolean],
      default: false
    },
    checkPages: {
      type: Boolean,
      default: true
    },
    // 表头数据（组件自定义的属性）
    cols: Array,
    data: Array,
    total: [String, Number],
    height: [String, Number],
    // IE浏览器 需要设置 height, 不然高度会偏大，显示不了分页
    wrapHeight: {
      type: [String],
      default: ''
    },
    maxHeight: {
      type: [String, Number],
      default: 2000
    },
    // 是否显示纵向边框
    border: {
      type: [Boolean],
      default: false
    },
    // 表头查询是否过滤掉没有输入的查询条件
    filterEmpty: {
      type: [Boolean],
      default: true
    },
    // 是否为斑马纹 table
    stripe: {
      type: [Boolean],
      default: true
    },
    // 列的宽度是否自撑开
    fit: {
      type: [Boolean],
      default: false
    },
    // 是否要高亮当前行
    highlightCurrentRow: {
      type: [Boolean],
      default: true
    },
    /*
    * contextMenu是个函数，返回的是Promise对象; Promise 应该 resovle 一个数组, 数组格式:
    * [
    *   { icon: 'el-icon-view', name: '菜单名字', fn: 回调函数 },
    *   { icon: 'el-icon-view', name: '菜单名字', fn: 回调函数 }
    * ]
    * 参考： 流程列表页 - src\pages\list\index.vue
    */
    contextMenuPromise: [Function],
    // 能否多选
    canSelection: {
      type: [Boolean],
      default: false
    },
    // 空数据时显示的文本内容
    emptyText: {
      type: [String],
      default: ''
    },
    // 隐藏页码
    hidePagination: {
      type: [Boolean],
      default: false
    },
    // 日期最小宽度
    dateMinWidth: {
      type: [Number],
      default: 220
    },
    // 显示html
    showhtml: {
      type: Boolean,
      default: false
    },
    tableDisplay: {
      type: String,
      default: ''
    },
    cacheKey: '',
    lighetTipType: '', // 指示灯提示类型
    enable: {
      type: Boolean,
      default: true
    },
    sepRowEntityTypeProp: String, // 每行可以独立entityType，但是需要后端返回字段相同，在数据归并的时候有用
    // TODO 新加 viewFile 查询接口可传入
    viewFile: {type: String, default: 'viewFile'},
  },
  computed: {
    hasQueryfilter() {
      return this.cols.filter(col => col.canSearch).length;
    },
    // 保存日期的filed
    dateFiled() {
      return this.cols.filter(col => col.htmlType === 'DATE').map(col => col.searchName);
    },
    // 分页参数
    pageParams() {
      return {
        pageSize: this.pageOptions.pageSize,
        pageNumber: this.pageOptions.pageNumber
      };
    },
    params() {
      let queryParams = clone(this.queryParams);
      try {
        // 结束日期要添加一天，不然如果结束日期和开始日期是同一天，列表页面搜索不到数据
        if (this.dateFiled && this.dateFiled.length) {
          for (let filed in queryParams) {
            let value = queryParams[filed];
            if (this.dateFiled.includes(filed) && value && value.split(',')[1]) {
              let s = value.split(',')[0];
              let e = value.split(',')[1];
              e = moment(e).add(1, 'days').format('YYYY-MM-DD');
              queryParams[filed] = `${s},${e}`;
            }
          }
        }
      } catch (e) {
        console.error(e);
      }
      if (typeof this.filterParams === 'function') {
        return {
          ...this.filterParams(
            this.pageParams,
            queryParams,
            this.sortParams
          ),
          ...this.otherParams
        };
      } else {
        return Object.assign(
          {},
          this.pageParams,
          this.sortParams.orderField ? this.sortParams : {},
          this._filterParams(queryParams)
        );
      }
    }
  },
  watch: {
    tableList(nVal) {
      this.$emit('update', nVal);
      if (!nVal || !nVal.length) this.showEmptyText = true;
    },
    cols(val, oldVal) {
      if (!this.checkCols(val)) return;
      this._initQueryParams();
      this.initTableList(1, false, {
        initScrollY: true,
        initScrollX: true
      });
    }
  },
  methods: {
    getTextByHtml(str) {
      return getTextByHtml(str);
    },
    customIconClick(row, col, index) { // 自定义图标的点击事件
      const option = col.customIconOption;
      if (!option.isLink || !option.clickEmiter) return;
      this.$emit(option.clickEmiter, row, index); // emit事件外部接收处理
    },
    customButtonClick(row, col) {
      this.$emit('buttonClick', col.clickEmiter, row);
    },
    // 点击附件
    async clickAttach(row) {
      this.attachVisible = true;
      // 如果本条数据就是文件数据，直接塞进去
      if (row.fileType) {
        this.attachTableData = [row];
        return;
      }
      const res = await this.$api.workflow[this.viewFile]({objectId: row.ID || row.id, objectType: this.params.entityType});
      this.attachTableData = res.data;
    },
    // 鼠标移入事件
    mouseoverTop(row, index, searchName) {
      let val = row[searchName];
      row.showSetTopIcon = !val;
      row.showCancelTopIcon = !!val;
      this.$set(this.tableList, index, row);
    },
    // 鼠标移出事件
    mouseoutTop(row, index) {
      row.showSetTopIcon = false;
      row.showCancelTopIcon = false;
      this.$set(this.tableList, index, row);
    },
    // 设置置顶请求
    setTop(row, value) {
      let params = {
        objectId: row.ID
      };
      if (this.otherParams.viewId) {
        params.viewId = this.otherParams.viewId;
      } else {
        params.isHome = 'Y';
      }
      // 设置置顶
      if (value) {
        this.$api.workflow.topOn(params).then(_ => {
          this.initTableList(1);
        });
        return;
      }
      // 取消置顶
      this.$api.workflow.topOff(params, { isFormData: true }).then(_ => {
        this.initTableList(1);
      });
    },
    selectTreeChange(value, col) {
      this.setCacheParams();
      this.$emit('queryChange', { value, col });
      if (this.queryChangeNosearch.includes(col.searchName)) return;
      this.initTableList(1);
    },
    // 有多个树下拉同时显示，需要先关闭所有树下拉窗口，再显示当前的树列表
    selectTreeClick(e) {
      // 关闭所有
      document.body.click();
      // 阻止再次触发 document.body.click
      this.__selectClick = true;
      setTimeout(_ => { this.__selectClick = false; }, 20);
    },
    // 隐藏树下拉，可以触发body的click事件，但是在这里已经阻止冒泡，所以要手动触发
    // 树下拉目标元素的点击事件已经阻止掉
    hideSelectTreePop(htmlType) {
      if (this.__selectClick) return;
      document.body.click();
    },
    // 关闭上一个菜单
    closeContextMenu() {
      this.tablecontextmenuRef && this.tablecontextmenuRef.hide();
    },
    /*
      获取指示灯的颜色
     1 f56c6c -> 红色;  0 e6a23c -> 橙色; 2 67c23a -> 绿色
      空字符串不显示
    */
    getDotStyle(type) {
      if (!type) {
        return { background: 'none' };
      } else {
        return { background: type === '0' ? '#e6a23c' : type === '1' ? '#f56c6c' : '#67c23a' };
      }
    },
    contextmenu(row, _event, event) {
      if (!isFunction(this.contextMenuPromise)) return;
      // 版本更新，参数位置发生变化
      try {
        event.preventDefault();
      } catch (e) {
        console.error(e);
        _event.preventDefault();
        event = _event;
      }
      // 高亮当前行
      let refTable = this.$refs.table;
      if (refTable && refTable.setCurrentRow) refTable.setCurrentRow(row);
      this.contextMenuPromise(row).then(menu => {
        if (!isArrayObject(menu)) return console.error(`${menu} 应该是数组对象！`);
        this.contextMenuData.customEvent = event;
        this.contextMenuData.axis = { x: event.clientX, y: event.clientY };
        this.contextMenuData.menu = menu;
        this.tablecontextmenuRef.show();
      });
    },
    async goPage(row, linkParamsOptions, linkEvent) {
      if (isFunction(linkEvent)) {
        linkEvent(row);
      } else {
        let entityId = '';
        linkParamsOptions = linkParamsOptions || {};
        let { idKey = 'id', entityType, isShowMsName, queryParams } = linkParamsOptions;
        if (this.sepRowEntityTypeProp) entityType = row[this.sepRowEntityTypeProp];
        /*
      * 如果： row数据结构
      * {
      *   "NAME": '试试',
      *   "PROJECTID": [{ "id": "xxx", "name": "产品研究" }], ...
      * }
      * 那么： idKey 应该等于 ['PROJECTID', 0, 'id']
      */
        entityId = isArray(idKey) ? this.getObjValueByKeys(row, idKey, '') : row[idKey];
        entityType = isArray(entityType) ? this.getObjValueByKeys(row, entityType, '') : entityType;
        if (this.$route.meta.type === 'tab' && linkParamsOptions.nameKey === 'NAME') {
          entityType = this.otherParams.entityType;
        }
        // 类型是TSK需要添加判断 是任务已发布、是当前责任人，直接进入交付物
        let tabName = '';
        if (entityType === 'TSK') {
          let resData = await this.$api.workflow.isGeneralProjectType({
            pjtId: row.PROJECTNAME[0].id
          });
          if (resData.data) {
            entityId = row.PROJECTNAME[0].id;
            entityType = 'PJT';
            tabName = '/ex_softwareTask';
            queryParams = `taskId=${row.ID}`;
          } else {
            if ((row.STATUSID && row.STATUSID[0].id !== 'IN') && (row.OWNERIDS && row.OWNERIDS[0].id === this.$store.getters.userData.id)) {
              tabName = '/ex_windchill_document_list.ftl';
            }
          }
        }
        // 跳转之前，保存滚动的位置
        this.saveScrollBar(this.getScrollTarget());
        let path = isShowMsName ? `/flowTab/${entityType}/${entityId}?MSNAME=${row[linkParamsOptions.msNameKey]}` : `/flowTab/${entityType}/${entityId}${tabName}`;
        if (queryParams) path += `?${queryParams}`;
        console.log(path, 'path');
        this.$router.push({ path: path });
      }
    },
    // 设置重点
    focusSetting(row, index, searchName) {
      let value = '0';
      try {
        value = row[searchName][0].name;
      } catch (e) {
        console.log(e);
      }
      let service = value === '1' ? this.$api.system.favOff : this.$api.system.favOn;
      let entityId = row.ID;
      let entityType = this.otherParams.entityType === 'ALL' ? row.ENTITYTYPE : this.otherParams.entityType;
      service({entityId, entityType}, {isFormData: true}).then(() => {
        row[searchName][0].name = value === '1' ? '0' : '1';
        this.$set(this.tableList, index, row);
      });
    },
    // 获取指示灯class
    getFocusClass(val) {
      if (isArrayObject(val)) {
        return +val[0].name === 1 ? ['el-icon-star-on'] : ['el-icon-star-off'];
      } else if (isObject(val)) {
        return +val.name === 1 ? ['el-icon-star-on'] : ['el-icon-star-off'];
      } else {
        return +val === 1 ? ['el-icon-star-on'] : ['el-icon-star-off'];
      }
    },
    getScrollTarget() {
      if (this.scrollTarget) return this.scrollTarget;
      try {
        return this.$refs.listTable.querySelector('.el-table__body-wrapper');
      } catch (e) { }
    },
    // 重新请求，还原滚动条
    restoreScrollPosition(y = true, x = false) {
      let scrollT = this.getScrollTarget();
      if (!scrollT) return;
      if (y) scrollT.scrollTop = 0;
      if (x) scrollT.scrollLeft = 0;
    },
    showMsgMoreThan50(number) {
      if (!this.checkPages) return false;
      let table = this.$refs.listTable.querySelector('.commonlist-table .el-table__body-wrapper table');
      let moreThanDom = document.getElementById('__moreThanMsg__');
      table.style.display = 'none';
      if (number > 50) {
        if (moreThanDom) {
          moreThanDom.style.display = 'block';
        } else {
          let cElement = document.createElement('div');
          cElement.setAttribute('id', '__moreThanMsg__');
          cElement.className = 'el-table__empty-block';
          cElement.style.display = 'block';
          let elementSpan = document.createElement('span');
          elementSpan.className = 'el-table__empty-text';
          elementSpan.innerText = this.$t('checkMsg.pageNumberCanNotExceed50');
          cElement.append(elementSpan);
          table.after(cElement);
        }
        return true;
      } else {
        if (moreThanDom) {
          moreThanDom.style.display = 'none';
        }
        table.style.display = '';
        return false;
      }
    },
    linkFilter(col, row) { // 链接类型判断逻辑
      let isLink = col.isLink;
      if (this.$route.params.entityType === 'WF1' && isLink && col.searchName === 'PROJECTID') {
        if (row['STATUSID'] && row['STATUSID'][0] && row['STATUSID'][0].id === '6d8269fb-0f38-4934-bf95-8cd79768e7df') { //  立项里发布可以进入项目里，其余不行
          isLink = true;
        } else {
          isLink = false;
        }
      }
      return isLink;
    },
    initTableList(pageNumber, initQueryParams, scrollPosition, val) {
      if (val !== 2) this.$emit('togglePage', this.pageParams);
      if (this.enable) {
        this.setCacheParams();
        scrollPosition = scrollPosition || {
          initScrollY: true,
          initScrollX: false
        };
        this.closeContextMenu();
        // 点击刷新，initQueryParams = true; 需要保留 _FOCUS 状态
        if (initQueryParams) {
          if (this.queryParams._FOCUS === '1') {
            this.queryParams = { ...this.defaultQueryParams, _FOCUS: '1' };
          } else {
            this.queryParams = { ...this.defaultQueryParams };
          }
        } else {
          this.pageOptions.pageNumber = pageNumber || 1;
        }
        // 如果被报表用到，那么去掉50页的限制
        if (!this.isReport && this.showMsgMoreThan50(this.pageOptions.pageNumber)) return;
        this.queryTableList(_ => {
          this.restoreScrollPosition(scrollPosition.initScrollY, scrollPosition.initScrollX);
        });
      }
    },
    initList({initPage, initQueryParams, initScrollY, initScrollX}) {
      this.closeContextMenu();
      initScrollY = !!initScrollY;
      initScrollX = !!initScrollX;
      if (initPage) { this.pageOptions.pageNumber = 1; }
      if (initQueryParams) { this.queryParams = { ...this.defaultQueryParams }; }
      this.queryTableList(_ => {
        this.restoreScrollPosition(initScrollY, initScrollX);
      });
    },
    // 关注重点
    focusFilter(key) {
      const { entityType, treeType = '' } = this.$route.params;
      this.queryParams[key] = this.queryParams[key] === '1' ? '0' : '1';
      this.initTableList();
      this.$api.workflow.updateCurrentUserSelectedFilter({
        isSelected: this.queryParams[key] === '0' ? 'N' : 'Y',
        viewType: entityType === 'PJT' ? entityType + treeType : undefined,
      });
    },
    // 字段排序
    sortChange(data) {
      this.sortParams = data.prop
        ? {
          orderField: data.prop,
          orderType: data.order === 'ascending' ? 'ASC' : 'DESC'
        }
        : {
          orderField: '',
          orderType: ''
        };
      this.initTableList();
    },
    // 数字选择
    selectedNumber(val, isCheck) {
      if (!isCheck) {
        this.tableList = [];
      } else {
        this.initTableList();
      }
    },
    indexMethod(index) {
      index++;
      return (this.pageOptions.pageNumber - 1) * this.pageOptions.pageSize + index;
    },
    queryTableList(callback) {
      // console.log(this.params.condition.replace(/"},{/g, '"}\n{'), this.params);
      this.params.pageNo = this.params.pageNumber;
      if (!this.enable) {
        this.params.disablePackage = 'Y';
      } else {
        delete this.params.disablePackage;
      }
      this._queryList(this.params).then(async ({ data }) => {
        try {
          let emitData = JSON.parse(JSON.stringify(data));
          emitData.type = this.otherParams.entityType;
          this.$emit('returnData', emitData);
        } catch (e) {}
        if (isFunction(this.filterData)) {
          let _filterData = await this.filterData(data);
          this.tableList = _filterData.list;
          this.pageOptions.total = _filterData.total;
        } else if (isObject(data)) {
          this.tableList = this.getObjValueByKeys(data, this.listKey, []);
          this.pageOptions.total = this.getObjValueByKeys(data, this.totalKey, 0);
          if (callback) callback();
        } else if (isArrayObject(data)) {
          this.tableList = data;
        } else {
          this.tableList = [];
          this.pageOptions.total = 0;
          this.restoreScrollPosition(true, true);
          console.error('请返回正确的数据格式： {总数Key: xxx, 列表Key: [] }');
        }
        this.selectData = [];
      }).catch(_ => {
        this.tableList = [];
        this.selectData = [];
        this.pageOptions.total = 0;
      });
    },
    getColWidth(width) {
      if (width === 'auto') return undefined;
      // if (['TOP', 'FOCUS'].indexOf(type) > -1) return '60px';
      return width + 'px';
    },
    getColcenter(col) {
      let prop = col.searchName;
      let centerSearchName = ['_SN', '_ATTACH', 'LIGHT', '_LIGHT', '_FOCUS', '_TOP', 'CODE', 'SN', 'sn', 'operation', 'LIGHTSIGN', 'batchIcon'];
      if (centerSearchName.includes(prop) || col.htmlType === 'NUMBER' || col.htmlType === 'DATE') {
        return 'center';
      } else {
        return 'left';
      }
    },
    // 处理参数
    _filterParams(queryParams) {
      let params = {};
      for (let k in queryParams) {
        let value = getSubmitVal(queryParams[k]);
        if (value || !this.filterEmpty) params[k] = value;
      }
      return params;
    },
    selectAllRow(all) {
      this.selectData = all;
    },
    selectRow(selection, row) {
      this.selectData = selection;
    },
    // 获取选中的数据
    getSelectData() {
      return this.selectData;
    },
    // 多选设置选中的值
    toggleRowSelection(ids, key = 'ID') {
      if (!ids) return;
      if (typeof ids === 'string') {
        ids = ids.split(',');
      } else if (!isArray(ids)) {
        return console.warn('参数必须是数组或者字符串：', ids);
      }
      this.tableList.filter(item => {
        if (ids.includes(getSubmitVal(item[key]))) {
          this.$refs.table.toggleRowSelection(item, true);
        }
      });
    },
    setCacheParams() {
      if (!this.cacheKey) return;
      let cacheParams = JSON.parse(sessionStorage.__tableList__ || '{}');
      cacheParams[this.cacheKey] = this.queryParams;
      sessionStorage.__tableList__ = JSON.stringify(cacheParams);
    },
    getCacheParams() {
      let cacheQuery;
      try {
        cacheQuery = JSON.parse(sessionStorage.__tableList__)[this.cacheKey] || {};
      } catch (e) { cacheQuery = {}; }
      return cacheQuery;
    },
    // 查询条件初始化
    _initQueryParams() {
      let _queryParams = {};
      this.cols.map(col => {
        let { searchName, htmlType } = col;
        if (!searchName) return;
        let filterDefVal = col.filterDefVal || '';
        if (!filterDefVal && ['USER', 'PROJECT', 'DEPARTMENT'].includes(htmlType)) {
          filterDefVal = [];
        }
        if (this.cacheKey) {
          let cacheParams = this.getCacheParams();
          filterDefVal = Object.keys(cacheParams).length ? cacheParams[searchName] : filterDefVal;
        }
        _queryParams[searchName] = filterDefVal;
        if (htmlType === 'FOCUS' && !filterDefVal) _queryParams[searchName] = '0';
      });
      this.queryParams = _queryParams;
    },
    // 初始化分页信息
    _initPageOptions() {
      Object.assign(this.pageOptions, this.page);
    },
    getObjValueByKeys(obj, keys, defaultVal) {
      if (!isArray(keys)) {
        console.error(`${keys} 不是个数组！`);
        return defaultVal;
      }
      let val = obj;
      try {
        keys.forEach(key => { val = val[key]; });
        return val;
      } catch (e) {
        console.error(`报错于： obj.${keys.join('.')}`);
        return defaultVal;
      }
    },
    // 初始化查询列表的方法
    _initQueryList() {
      this._queryList = this.getObjValueByKeys(this.$api, this.page.pageService);
    },
    checkCols(cols) {
      for (let col of cols) {
        if (!col.htmlType) {
          console.error('表头数据htmlType字段错误：', col.htmlType);
          this.colsVerificationPass = false;
          return false;
        }
        if (!colsType.includes(col.htmlType)) {
          console.warn(`该类型没有在${colsType.join(',')}里面：`, col.htmlType);
        }
      }
      this.colsVerificationPass = true;
      return true;
    }
  },
  created() {
    if (!this.checkCols(this.cols)) return;
    this._initQueryList();
    this._initPageOptions();
    this._initQueryParams();
    if (this.data && this.data[0]) {
      this.tableList = clone(this.data);
      this.pageOptions.total = +this.total || 0;
    } else {
      if (!this.isReport) {
        this.queryTableList();
      }
    }
    this.$nextTick(_ => {
      // 滚动隐藏所有弹窗 具体代码见： closePopBus.js
      this.scrollHidePop(this.getScrollTarget());
      this.tablecontextmenuRef = this.$refs.tablecontextmenuRef;
    });
  }
};
</script>
<style lang="scss" >
.table-ctrl {
  padding: 0 10px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  .el-button {
    margin-left: 10px;
  }
  line-height: 40px;
  .el-checkbox__label {
    color: #fff!important;
  }
}
.commonlist-table {
  height: 100%;
  .el-table .el-table__header-wrapper .el-table__header th.el-table-column--selection .cell {
    position: absolute;
    left: 0;
    bottom: 0;
    // height: 31px;
    line-height: 31px;
    padding: 0 10px;
  }
}
.commonlist-table-self {
  .operation__wrap {
    text-align: center;
    color: #409eff;
    &.disabled {
      color: #606266;
      i {
        cursor: not-allowed;
      }
    }
    i {
      padding-left: 5px;
      cursor: pointer;
    }
    .el-icon-edit {
      font-size: 16px;
      position: relative;
      top: 2px;
    }
  }
  // height: 100%;
  #__moreThanMsg__ {
    box-sizing: border-box;
    padding: 10px;
  }
  .commonlist-table-self__topwrap {
    height: 23px;
    display: inline-block;
    width: 100%;
    i {
      color: #2962E7;
      font-size: 18px
    }
  }
  .el-progress__text {
    font-size: 12px!important;
  }
 .commonlist-table__light {
    margin-top: -5px;
    line-height: normal!important;
  }
  .customIcon {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
}
.icon-cursor {
  cursor:pointer
}
.batchicon{
  margin: 0 2px;
}
</style>
```