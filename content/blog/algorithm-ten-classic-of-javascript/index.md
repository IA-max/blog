---
title: '算法 - 十大经典排序'
date: '2019-09-07T00:53:38+08:00'
status: publish
permalink: /ten-classic-javascript-algorithm
category: ["algorithm"] 
tag: ["algorithm"]
author: "max"
excerpt: "排序算法可以分为内部排序和外部排序，内部排序是数据记录在内存中进行排序，而外部排序是因排序的数据很大，一次不能容纳全部的排序记录，在排序过程中需要访问外存.
常见的内部排序算法有：插入排序、希尔排序、选择排序、冒泡排序、归并排序、快速排序、堆排序、基数排序等"
featured: false
image: ./p1.png
featuredimage:
  src: "p1.png"
  alt: ""
---
排序算法是<数据结构与算法>中最基本的算法之一

排序算法可以分为内部排序和外部排序，内部排序是数据记录在内存中进行排序，而外部排序是因排序的数据很大，一次不能容纳全部的排序记录，在排序过程中需要访问外存.

常见的内部排序算法有：插入排序、希尔排序、选择排序、冒泡排序、归并排序、快速排序、堆排序、基数排序等


用一张图概括：

<table class="has-fixed-layout"><thead><tr><th> 排序算法 </th><th>平均时间复杂度 </th><th> 最好情况 </th><th> 最坏情况 </th><th>空间复杂间</th><th>排序方式</th><th>稳定性</th></tr></thead><tbody><tr><td>冒泡排序</td><td>O(n<sup>2</sup>)</td><td> O(n<sup>2</sup>) </td><td> O(n<sup>2</sup>) </td><td> O(1) </td><td>In-place</td><td>稳定</td></tr><tr><td>选择排序</td><td> O(n<sup>2</sup>) </td><td> O(n<sup>2</sup>) </td><td> O(n<sup>2</sup>) </td><td> O(1) </td><td>In-place </td><td> 稳定 </td></tr><tr><td>插入排序</td><td> O(n<sup>2</sup>) </td><td> O(n) </td><td> O(n<sup>2</sup>) </td><td> O(1) </td><td>In-place </td><td> 稳定 </td></tr><tr><td>希尔排序 </td><td> O(n log n) </td><td> O(n log<sup>2 </sup>n) </td><td>O(<sub>n</sub> log<sup>2</sup> <sub>n</sub>)</td><td> O(1) </td><td>In-place </td><td> 稳定 </td></tr><tr><td> 归并排序 </td><td> O(n log n) </td><td> O(n log n) </td><td> O(n logn) </td><td> O(n) </td><td>Out-place </td><td> 不稳定 </td></tr><tr><td> 快速排序 </td><td> O(n log n) </td><td> O(n log n) </td><td> O(n<sup>2</sup>)</td><td> O(log n) </td><td>In-place </td><td> 稳定 </td></tr><tr><td> 堆排序 </td><td> O(n log n) </td><td> O(n log n) </td><td> O(n log n) </td><td>O(1)</td><td>In-place </td><td> 不稳定 </td></tr><tr><td> 计数排序 </td><td> O(n + k) </td><td> O(n + k) </td><td> O(n + k) </td><td>O(k)</td><td>Out-place </td><td> 不稳定 </td></tr><tr><td>桶排序</td><td> O(n + k) </td><td> O(n + k) </td><td> O(n<sup>2</sup>) </td><td>O(n + k)</td><td>Out-place </td><td> 稳定 </td></tr><tr><td>基数排序</td><td> O(n \* k) </td><td> O(n \* k) </td><td> O(n \* k) </td><td> O(n + k) </td><td>Out-place </td><td> 稳定 </td></tr></tbody></table>

**关于时间复杂度：**  
- 平方阶 (O(n2)) 排序 各类简单排序：直接插入、直接选择和冒泡排序。
- 线性对数阶 (O(nlog2n)) 排序 快速排序、堆排序和归并排序；
- O(n1+§)) 排序，§ 是介于 0 和 1 之间的常数。 希尔排序
- 线性阶 (O(n)) 排序 基数排序，此外还有桶、箱排序。

 **关于稳定性：**  
- 稳定的排序算法：冒泡排序、插入排序、归并排序和基数排序.
- 不是稳定的排序算法：选择排序、快速排序、希尔排序、堆排序.

**名词解释：**  
- n：数据规模
- k：“桶”的个数
- In-place：占用常数内存，不占用额外内存
- Out-place：占用额外内存
- 稳定性：排序后2个相等键值的顺序和排序之前它们的顺序相同

###  排序分类 

![](./p1.png)

### 内容大纲

- [冒泡排序](#冒泡排序)
- [选择排序](#选择排序)
- [插入排序](#插入排序)
- [希尔排序](#希尔排序)
- [归并排序](#归并排序)
- [快速排序](#快速排序)
- [堆排序](#堆排序)
- [计数排序](#计数排序)
- [桶排序](#桶排序)
- [基数排序 ](#基数排序)

### <span id="冒泡排序">冒泡排序</span>
也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

作为最简单的排序算法之一，冒泡排序给我的感觉就像 Abandon 在单词书里出现的感觉一样，每次都在第一页第一位，所以最熟悉。冒泡排序还有一种优化算法，就是立一个 flag，当在一趟序列遍历中元素没有发生交换，则证明该序列已经有序。但这种改进对于提升性能来说并没有什么太大作用。

### 1. 算法步骤[](#1-suan-fa-bu-zhou)

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

###  2. 动图演示 

### 3. 什么时候最快[](#3-shi-mo-shi-hou-zui-kuai)

当输入的数据已经是正序时（都已经是正序了，我还要你冒泡排序有何用啊）。

### 4. 什么时候最慢[](#4-shi-mo-shi-hou-zui-man)

当输入的数据是反序时（写一个 for 循环反序输出数据不就行了，干嘛要用你冒泡排序呢，我是闲的吗）。

### 5. JavaScript 代码实现

```js
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
```

#### 进化版冒泡排序

“**进化版**“冒泡排序算法相对于“原始人”冒泡排序有个亮点，就是每一层的循环都记录上一次排序的位置，这两种排序算法都是先排最后一位，最后一位是最大的，然后以此类推。  
 细细推敲第二种方法显然比第一种方法少走了一些冤枉路，也就是说每一层排完序之后，就记录排到最大的哪一位在什么位置，因为每一层最大的数就是它所在数组的倒数的位数，因此下一次就没必要再循环一遍，相对于第一种就少进行了很多计算。

```js
function bubbleSort2(arr) {
    console.time('改进后冒泡排序耗时');
    var i = arr.length-1;  //初始时,最后位置保持不变
    while ( i> 0) {
        var pos= 0; //每趟开始时,无记录交换
        for (var j= 0; j< i; j++)
            if (arr[j]> arr[j+1]) {
                pos= j; //记录交换的位置
                var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        i= pos; //为下一趟排序作准备
     }
     console.timeEnd('改进后冒泡排序耗时');
     return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

####  升级版冒泡排序

```js
function bubbleSort3(arr3) {
　　var low = 0;
　　var high= arr.length-1; //设置变量的初始值
　　var tmp,j;
　　console.time('2.改进后冒泡排序耗时');
　　while (low < high) {
　　　　for (j= low; j< high; ++j) {         //正向冒泡,找到最大者
　　　　　　if (arr[j]> arr[j+1]) {
　　　　　　　　tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
　　　　　　}
　　　　}
　　　　--high;  //修改high值, 前移一位
　　　　for (j=high; j>low; --j) {          //反向冒泡,找到最小者
　　　　　　if (arr[j]<arr[j-1]) {
　　　　　　　　tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
　　　　　　}
　　　　}　
　　　　++low;  //修改low值,后移一位
　　}
　　console.timeEnd('2.改进后冒泡排序耗时');
　　return arr3;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort3(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50] ;
```

传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值,我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值(最大者和最小者) , 从而使排序趟数几乎减少了一半。

这种排序方式也算是锦上添花，因为前两次的排序都是按最大或者最小方向进行排序，而第三种方法会选择从两头出发一起计算，双管齐下！

#### 自创版冒泡排序

```js
function bubbleSort3(arr3) {
　　var low = 0;
　　var high= arr.length-1; //设置变量的初始值
　　var tmp,j;
　　console.time('3.改进后冒泡排序耗时');
　　while (low < high) {
　　　　var pos1 = 0,pos2=0;
　　　　for (let i= low; i< high; ++i) { //正向冒泡,找到最大者
　　　　　　if (arr[i]> arr[i+1]) {
　　　　　　　　tmp = arr[i]; arr[i]=arr[i+1];arr[i+1]=tmp;
　　　　　　　　pos1 = i ;
　　　　　　}
　　　　}
　　　　high = pos1;// 记录上次位置
　　　　for (let j=high; j>low; --j) { //反向冒泡,找到最小者
　　　　　　if (arr[j]<arr[j-1]) {
　　　　　　　　tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;　　
　　　　　　　　pos2 = j;
　　　　　　}
　　　　}　　　
　　　　
　　　　low = pos2; //修改low值
　　}
　　console.timeEnd('3.改进后冒泡排序耗时');
　　return arr3;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort3(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50] ;
```

既然每次记录位置可以减少计算，两头算双管齐下也能减少计算，那么思考，如果每次记录位置而且还两头算是不是会更加省事呢？（根据1.2，1.3自创）但是冒泡排序也有弊端，就是两种极端的情况，一种是数据本来就是正序，那做的就是无用功，另外一种就是反序，不想理你。。。具体怎么弊端想想也就知道了

###  6. Python 代码实现 

```python
def bubbleSort(arr):
    for i in range(1, len(arr)):
        for j in range(0, len(arr)-i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
```

### 7. Go 代码实现[](#7-go-dai-ma-shi-xian)

```go
func bubbleSort(arr []int) []int {
    length := len(arr)
    for i := 0; i < length; i++ {
        for j := 0; j < length-1-i; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
    return arr
}
```

### 8. Java 代码实现 

```java
public class BubbleSort implements IArraySort {
    @Override
    public int[] sort(int[] sourceArray) throws Exception {
        // 对 arr 进行拷贝，不改变参数内容
        int[] arr = Arrays.copyOf(sourceArray, sourceArray.length);
        for (int i = 1; i < arr.length; i++) {
            // 设定一个标记，若为true，则表示此次循环没有进行交换，也就是待排序列已经有序，排序已经完成。
            boolean flag = true;
            for (int j = 0; j < arr.length - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                    flag = false;
                }
            }
            if (flag) {
                break;
            }
        }
        return arr;
    }
}
```

### 9. PHP 代码实现 

```php
function bubbleSort($arr)
{
    $len = count($arr);
    for ($i = 0; $i < $len - 1; $i++) {
        for ($j = 0; $j < $len - 1 - $i; $j++) {
            if ($arr[$j] > $arr[$j+1]) {
                $tmp = $arr[$j];
                $arr[$j] = $arr[$j+1];
                $arr[$j+1] = $tmp;
            }
        }
    }
    return $arr;
}
```

### <span id="选择排序">选择排序</span>
是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。  
唯一的好处可能就是不占用额外的内存空间了吧。

### 1. 算法步骤[](#1-suan-fa-bu-zhou)

1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
3. 重复第二步，直到所有元素均排序完毕。

### 2. 动图演示

[![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/assets_-Lm9JtwbhXVOfXyecToy_-Lm9KQIJAMvCgJQzErQS_-Lm9KSObDh5VGWhPE8Wh_selectionSort.gif)](https://blog.imaxyoung.com/wp-content/uploads/2019/09/assets_-Lm9JtwbhXVOfXyecToy_-Lm9KQIJAMvCgJQzErQS_-Lm9KSObDh5VGWhPE8Wh_selectionSort.gif)
### 动图演示

### 3. JavaScript 代码实现[](#3-javascript-dai-ma-shi-xian)
```js
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
```

### 4. Python 代码实现[](#4-python-dai-ma-shi-xian)

```py
def selectionSort(arr):
    for i in range(len(arr) - 1):
        # 记录最小数的索引
        minIndex = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[minIndex]:
                minIndex = j
        # i 不是最小数时，将 i 和最小数进行交换
        if i != minIndex:
            arr[i], arr[minIndex] = arr[minIndex], arr[i]
    return arr
```

### 5. Go 代码实现[](#5-go-dai-ma-shi-xian)

```go
func selectionSort(arr []int) []int {
    length := len(arr)
    for i := 0; i < length-1; i++ {
        min := i
        for j := i + 1; j < length; j++ {
            if arr[min] > arr[j] {
                min = j
            }
        }
        arr[i], arr[min] = arr[min], arr[i]
    }
    return arr
}
```

### 6. Java 代码实现[](#6-java-dai-ma-shi-xian)

```java
public class SelectionSort implements IArraySort {
    @Override
    public int[] sort(int[] sourceArray) throws Exception {
        int[] arr = Arrays.copyOf(sourceArray, sourceArray.length);
        // 总共要经过 N-1 轮比较
        for (int i = 0; i < arr.length - 1; i++) {
            int min = i;
            // 每轮需要比较的次数 N-i
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    // 记录目前能找到的最小值元素的下标
                    min = j;
                }
            }
            // 将找到的最小值和i位置所在的值进行交换
            if (i != min) {
                int tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp;
            }
        }
        return arr;
    }
}
```

7. PHP 代码实现[](#7-php-dai-ma-shi-xian)
=====================================

```php
function selectionSort($arr)
{
    $len = count($arr);
    for ($i = 0; $i < $len - 1; $i++) {
        $minIndex = $i;
        for ($j = $i + 1; $j < $len; $j++) {
            if ($arr[$j] < $arr[$minIndex]) {
                $minIndex = $j;
            }
        }
        $temp = $arr[$i];
        $arr[$i] = $arr[$minIndex];
        $arr[$minIndex] = $temp;
    }
    return $arr;
}
```

### <span id="插入排序">插入排序</span>
----

插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

插入排序和冒泡排序一样，也有一种优化算法，叫做拆半插入。

### **1. 算法步骤**[](https://sort.hust.cc/3.insertionsort#1-suan-fa-bu-zhou)

1. 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
2. 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

2\. 动图演示

![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/assets_-Lm9JtwbhXVOfXyecToy_-Lm9KQIJAMvCgJQzErQS_-Lm9KSRUSDsU1-_gwBLT_insertionSort.gif)

### 3. JavaScript 代码实现[](#3-javascript-dai-ma-shi-xian)

```js
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
```

#### 升级版插入排序

```js
function binaryInsertionSort(array) {
　　console.time('二分插入排序耗时：');
　　for (var i = 1; i < array.length; i++) {
　　　　var key = array[i], left = 0, right = i - 1;
　　　　while (left <= right) {
　　　　　　var middle = parseInt((left + right) / 2);
　　　　　　if (key < array[middle]) {
　　　　　　　　right = middle - 1;
　　　　　　} else {
　　　　　　　　left = middle + 1;
　　　　　　}
　　　　}
　　　　for (var j = i - 1; j >= left; j--) {
　　　　　　array[j + 1] = array[j];
　　　　}
　　　　array[left] = key;
　　}
　　console.timeEnd('二分插入排序耗时：');
　　return array;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(binaryInsertionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
```

二分法插入排序第一遍读下去，一脸懵逼，写的是什么鬼，仔细琢磨一下却别有一番风味，听小编慢慢讲下去，首先外层循环没什么疑问，就是简单的遍历一遍数组，那么先看while循环，left和right两个变量可以简单的类比3.1中的已排序的首末两个位置，然后选取未排序的第一个值和已排序的中间位置的值进行比较，这样的话也就是在最坏的情况下每层循环也只是计算了已排序的序列长度的一半的次数，简而言之就是在无限逼近left和right值，找到未排序第一个值应该在的位置。还是以梁山排名为例子，在宋江没有到梁上之前，每个上梁上的人跟已经排过名的从大往小进行比较，然后找到自己的位置，在老大宋江来之后，后续人慢慢多了，然后宋老大就订了条规矩，就是每个新来的人和已排过名次的位于中间名次的好汉进行比较，胜了往前一位比较，败了往后一位比较，然后找到自己的位置。好了，while循环解释完毕，那么下面又多了一条for循环，这又是什么鬼？不要着急，待小编与你慢慢道来，看不懂没关系，先看循环体，循环体的意思就是把前一个值给后一个，然后看循环条件是从i-1的位置从后往前依次将前一个元素的值给后一个，先不要管i-1是谁，先问 i 是谁，i 不就是未排序的第一个元素么，不就是我们拿来对已进行排序的元素么，简而言之不就是新上梁山的好汉么，那么从left值开始到 i-1 的位置依次将前一个元素的值给后一个无非就是空出 left 的位置，left 的位置不就是新上梁上好汉的位置！

### 4. Python 代码实现[](#4-python-dai-ma-shi-xian)

```py
def insertionSort(arr):
    for i in range(len(arr)):
        preIndex = i-1
        current = arr[i]
        while preIndex >= 0 and arr[preIndex] > current:
            arr[preIndex+1] = arr[preIndex]
            preIndex-=1
        arr[preIndex+1] = current
    return arr
```

### 5. Go 代码实现[](#5-go-dai-ma-shi-xian)

```go
func insertionSort(arr []int) []int {
    for i := range arr {
        preIndex := i - 1
        current := arr[i]
        for preIndex >= 0 && arr[preIndex] > current {
            arr[preIndex+1] = arr[preIndex]
            preIndex -= 1
        }
        arr[preIndex+1] = current
    }
    return arr
}
```

### 6. Java 代码实现[](#6-java-dai-ma-shi-xian)

```java
public class InsertSort implements IArraySort {
    @Override
    public int[] sort(int[] sourceArray) throws Exception {
        // 对 arr 进行拷贝，不改变参数内容
        int[] arr = Arrays.copyOf(sourceArray, sourceArray.length);
        // 从下标为1的元素开始选择合适的位置插入，因为下标为0的只有一个元素，默认是有序的
        for (int i = 1; i < arr.length; i++) {
            // 记录要插入的数据
            int tmp = arr[i];
            // 从已经排序的序列最右边的开始比较，找到比其小的数
            int j = i;
            while (j > 0 && tmp < arr[j - 1]) {
                arr[j] = arr[j - 1];
                j--;
            }
            // 存在比其小的数，插入
            if (j != i) {
                arr[j] = tmp;
            }
        }
        return arr;
    }
}
```

### 7. PHP 代码实现[](#7-php-dai-ma-shi-xian)

```js
function insertionSort($arr)
{
    $len = count($arr);
    for ($i = 1; $i < $len; $i++) {
        $preIndex = $i - 1;
        $current = $arr[$i];
        while($preIndex >= 0 && $arr[$preIndex] > $current) {
            $arr[$preIndex+1] = $arr[$preIndex];
            $preIndex--;
        }
        $arr[$preIndex+1] = $current;
    }
    return $arr;
}
```

### <span id="希尔排序">希尔排序</span>
----

希尔排序，也称递减增量排序算法，是插入排序的一种更高效的改进版本。但希尔排序是非稳定排序算法。

希尔排序是基于插入排序的以下两点性质而提出改进方法的：

- 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率；
- 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位；

希尔排序的基本思想是：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行依次直接插入排序。

![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/86dc5422e18bd545afef8898b1bb1315_Converted.jpg)

### **1. 算法步骤**[](https://sort.hust.cc/4.shellsort#1-suan-fa-bu-zhou)

1. 选择一个增量序列 t1，t2，……，tk，其中 ti &gt; tj, tk = 1；
2. 按增量序列个数 k，对序列进行 k 趟排序；
3. 每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

### **2. JavaScript 代码实现**[](https://sort.hust.cc/4.shellsort#2-javascript-dai-ma-shi-xian)

```js
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {          //动态定义间隔序列
        gap =gap*3+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}
```

### **3. Python 代码实现**[](https://sort.hust.cc/4.shellsort#3-python-dai-ma-shi-xian)

```py
def shellSort(arr):
    import math
    gap=1
    while(gap < len(arr)/3):
        gap = gap*3+1
    while gap > 0:
        for i in range(gap,len(arr)):
            temp = arr[i]
            j = i-gap
            while j >=0 and arr[j] > temp:
                arr[j+gap]=arr[j]
                j-=gap
            arr[j+gap] = temp
        gap = math.floor(gap/3)
    return arr
}
```

### **4. Go 代码实现**[](https://sort.hust.cc/4.shellsort#4-go-dai-ma-shi-xian)

```go
func shellSort(arr []int) []int {
    length := len(arr)
    gap := 1
    for gap < gap/3 {
        gap = gap*3 + 1
    }
    for gap > 0 {
        for i := gap; i < length; i++ {
            temp := arr[i]
            j := i - gap
            for j >= 0 && arr[j] > temp {
                arr[j+gap] = arr[j]
                j -= gap
            }
            arr[j+gap] = temp
        }
        gap = gap / 3
    }
    return arr
}
```

### **5. Java 代码实现**[](https://sort.hust.cc/4.shellsort#5-java-dai-ma-shi-xian)

```java
public class ShellSort implements IArraySort {
    @Override
    public int[] sort(int[] sourceArray) throws Exception {
        // 对 arr 进行拷贝，不改变参数内容
        int[] arr = Arrays.copyOf(sourceArray, sourceArray.length);
        int gap = 1;
        while (gap < arr.length/3) {
            gap = gap * 3 + 1;
        }
        while (gap > 0) {
            for (int i = gap; i < arr.length; i++) {
                int tmp = arr[i];
                int j = i - gap;
                while (j >= 0 && arr[j] > tmp) {
                    arr[j + gap] = arr[j];
                    j -= gap;
                }
                arr[j + gap] = tmp;
            }
            gap = (int) Math.floor(gap / 3);
        }
        return arr;
    }
}
```

### **6. PHP 代码实现**[](https://sort.hust.cc/4.shellsort#6-php-dai-ma-shi-xian)

```js
function shellSort($arr)
{
    $len = count($arr);
    $temp = 0;
    $gap = 1;
    while($gap < $len / 3) {
        $gap = $gap * 3 + 1;
    }
    for ($gap; $gap > 0; $gap = floor($gap / 3)) {
        for ($i = $gap; $i < $len; $i++) {
            $temp = $arr[$i];
            for ($j = $i - $gap; $j >= 0 && $arr[$j] > $temp; $j -= $gap) {
                $arr[$j+$gap] = $arr[$j];
            }
            $arr[$j+$gap] = $temp;
        }
    }
    return $arr;
}
```

### <span id="归并排序">归并排序</span>
----

归并排序（Merge sort）是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。

作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：

- 自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第 2 种方法）；
- 自下而上的迭代；

在《数据结构与算法 JavaScript 描述》中，作者给出了自下而上的迭代方法。但是对于递归法，作者却认为：

> *However, it is not possible to do so in JavaScript, as the recursion goes too deep for the language to handle.*
> 
> *然而，在 JavaScript 中这种方式不太可行，因为这个算法的递归深度对它来讲太深了。*

说实话，我不太理解这句话。意思是 JavaScript 编译器内存太小，递归太深容易造成内存溢出吗？还望有大神能够指教。

和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是 O(nlogn) 的时间复杂度。代价是需要额外的内存空间。

### **2. 算法步骤**[](https://sort.hust.cc/5.mergesort#2-suan-fa-bu-zhou)

1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
4. 重复步骤 3 直到某一指针达到序列尾；
5. 将另一序列剩下的所有元素直接复制到合并序列尾。

### **3. 动图演示**

![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/assets_-Lm9JtwbhXVOfXyecToy_-Lm9KQIJAMvCgJQzErQS_-Lm9KR9MTC7BHYOobU-Y_mergeSort.gif)
### 4. JavaScript 代码实现[](#4-javascript-dai-ma-shi-xian)

```js
function mergeSort(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right)
{
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}
```

### 5. Python 代码实现[](#5-python-dai-ma-shi-xian)

```py
def mergeSort(arr):
    import math
    if(len(arr)<2):
        return arr
    middle = math.floor(len(arr)/2)
    left, right = arr[0:middle], arr[middle:]
    return merge(mergeSort(left), mergeSort(right))
def merge(left,right):
    result = []
    while left and right:
        if left[0] <= right[0]:
            result.append(left.pop(0));
        else:
            result.append(right.pop(0));
    while left:
        result.append(left.pop(0));
    while right:
        result.append(right.pop(0));
    return result
```

### 6. Go 代码实现[](#6-go-dai-ma-shi-xian)

```go
func mergeSort(arr []int) []int {
    length := len(arr)
    if length < 2 {
        return arr
    }
    middle := length / 2
    left := arr[0:middle]
    right := arr[middle:]
    return merge(mergeSort(left), mergeSort(right))
}
func merge(left []int, right []int) []int {
    var result []int
    for len(left) != 0 && len(right) != 0 {
        if left[0] <= right[0] {
            result = append(result, left[0])
            left = left[1:]
        } else {
            result = append(result, right[0])
            right = right[1:]
        }
    }
    for len(left) != 0 {
        result = append(result, left[0])
        left = left[1:]
    }
    for len(right) != 0 {
        result = append(result, right[0])
        right = right[1:]
    }
    return result
}
```

7. Java 代码实现[](#7-java-dai-ma-shi-xian)
=======================================

```java
public class MergeSort implements IArraySort {
    @Override
    public int[] sort(int[] sourceArray) throws Exception {
        // 对 arr 进行拷贝，不改变参数内容
        int[] arr = Arrays.copyOf(sourceArray, sourceArray.length);
        if (arr.length < 2) {
            return arr;
        }
        int middle = (int) Math.floor(arr.length / 2);
        int[] left = Arrays.copyOfRange(arr, 0, middle);
        int[] right = Arrays.copyOfRange(arr, middle, arr.length);
        return merge(sort(left), sort(right));
    }
    protected int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int i = 0;
        while (left.length > 0 && right.length > 0) {
            if (left[0] <= right[0]) {
                result[i++] = left[0];
                left = Arrays.copyOfRange(left, 1, left.length);
            } else {
                result[i++] = right[0];
                right = Arrays.copyOfRange(right, 1, right.length);
            }
        }
        while (left.length > 0) {
            result[i++] = left[0];
            left = Arrays.copyOfRange(left, 1, left.length);
        }
        while (right.length > 0) {
            result[i++] = right[0];
            right = Arrays.copyOfRange(right, 1, right.length);
        }
        return result;
    }
}
```

8. PHP 代码实现[](#8-php-dai-ma-shi-xian)
=====================================

```php
function mergeSort($arr)
{
    $len = count($arr);
    if ($len < 2) {
        return $arr;
    }
    $middle = floor($len / 2);
    $left = array_slice($arr, 0, $middle);
    $right = array_slice($arr, $middle);
    return merge(mergeSort($left), mergeSort($right));
}
function merge($left, $right)
{
    $result = [];
    while (count($left) > 0 && count($right) > 0) {
        if ($left[0] <= $right[0]) {
            $result[] = array_shift($left);
        } else {
            $result[] = array_shift($right);
        }
    }
    while (count($left))
        $result[] = array_shift($left);
    while (count($right))
        $result[] = array_shift($right);
    return $result;
}
```

### <span id="快速排序">快速排序</span>
----

快速排序是由东尼·霍尔所发展的一种排序算法。在平均状况下，排序 n 个项目要 Ο(nlogn) 次比较。在最坏状况下则需要 Ο(n2) 次比较，但这种状况并不常见。事实上，快速排序通常明显比其他 Ο(nlogn) 算法更快，因为它的内部循环（inner loop）可以在大部分的架构上很有效率地被实现出来。

快速排序使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。

快速排序又是一种分而治之思想在排序算法上的典型应用。本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。

快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，就是快，而且效率高！它是处理大数据最快的排序算法之一了。虽然 Worst Case 的时间复杂度达到了 O(n²)，但是人家就是优秀，在大多数情况下都比平均时间复杂度为 O(n logn) 的排序算法表现要更好，可是这是为什么呢，我也不知道。好在我的强迫症又犯了，查了 N 多资料终于在《算法艺术与信息学竞赛》上找到了满意的答案：

> *快速排序的最坏运行情况是 O(n²)，比如说顺序数列的快排。但它的平摊期望时间是 O(nlogn)，且 O(nlogn) 记号中隐含的常数因子很小，比复杂度稳定等于 O(nlogn) 的归并排序要小很多。所以，对绝大多数顺序性较弱的随机数列而言，快速排序总是优于归并排序。*

### **1. 算法步骤**[](https://sort.hust.cc/6.quicksort#1-suan-fa-bu-zhou)

1. 从数列中挑出一个元素，称为 “基准”（pivot）;
2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；

递归的最底部情形，是数列的大小是零或一，也就是永远都已经被排序好了。虽然一直递归下去，但是这个算法总会退出，因为在每次的迭代（iteration）中，它至少会把一个元素摆到它最后的位置去。

### **2. 动图演示**

![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/assets_-Lm9JtwbhXVOfXyecToy_-Lm9KQIJAMvCgJQzErQS_-Lm9KR8iDzYGG-GLSb8O_quickSort.gif)

### 3. JavaScript 代码实现[](#3-javascript-dai-ma-shi-xian)

```js
function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}
function partition(arr, left ,right) {     // 分区操作
    var pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index-1;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition2(arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high;
    }
    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) {
      ++low;
    }
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}
function quickSort2(arr, low, high) {
  if (low < high) {
    let pivot = partition2(arr, low, high);
    quickSort2(arr, low, pivot - 1);
    quickSort2(arr, pivot + 1, high);
  }
  return arr;
}
```

### 4. Python 代码实现[](#4-python-dai-ma-shi-xian)

```py
def quickSort(arr, left=None, right=None):
    left = 0 if not isinstance(left,(int, float)) else left
    right = len(arr)-1 if not isinstance(right,(int, float)) else right
    if left < right:
        partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex-1)
        quickSort(arr, partitionIndex+1, right)
    return arr
def partition(arr, left, right):
    pivot = left
    index = pivot+1
    i = index
    while  i <= right:
        if arr[i] < arr[pivot]:
            swap(arr, i, index)
            index+=1
        i+=1
    swap(arr,pivot,index-1)
    return index-1
def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]
```

### 5. Go 代码实现[](#5-go-dai-ma-shi-xian)

```go
func quickSort(arr []int) []int {
    return _quickSort(arr, 0, len(arr)-1)
}
func _quickSort(arr []int, left, right int) []int {
    if left < right {
        partitionIndex := partition(arr, left, right)
        _quickSort(arr, left, partitionIndex-1)
        _quickSort(arr, partitionIndex+1, right)
    }
    return arr
}
func partition(arr []int, left, right int) int {
    pivot := left
    index := pivot + 1
    for i := index; i <= right; i++ {
        if arr[i] < arr[pivot] {
            swap(arr, i, index)
            index += 1
        }
    }
    swap(arr, pivot, index-1)
    return index - 1
}
func swap(arr []int, i, j int) {
    arr[i], arr[j] = arr[j], arr[i]
}
```

### 6. C++版[](#6cban)

```c++
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="cpp" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""> //严蔚敏《数据结构》标准分割函数
 Paritition1(int A[], int low, int high) {
   int pivot = A[low];
   while (low < high) {
     while (low < high && A[high] >= pivot) {
       --high;
     }
     A[low] = A[high];
     while (low < high && A[low] <= pivot) {
       ++low;
     }
     A[high] = A[low];
   }
   A[low] = pivot;
   return low;
 }
 void QuickSort(int A[], int low, int high) //快排母函数
 {
   if (low < high) {
     int pivot = Paritition1(A, low, high);
     QuickSort(A, low, pivot - 1);
     QuickSort(A, pivot + 1, high);
   }
 }
```

### 7. Java 代码实现[](#7-java-dai-ma-shi-xian)

```java
public class QuickSort implements IArraySort {
    @Override
    public int[] sort(int[] sourceArray) throws Exception {
        // 对 arr 进行拷贝，不改变参数内容
        int[] arr = Arrays.copyOf(sourceArray, sourceArray.length);
        return quickSort(arr, 0, arr.length - 1);
    }
    private int[] quickSort(int[] arr, int left, int right) {
        if (left < right) {
            int partitionIndex = partition(arr, left, right);
            quickSort(arr, left, partitionIndex - 1);
            quickSort(arr, partitionIndex + 1, right);
        }
        return arr;
    }
    private int partition(int[] arr, int left, int right) {
        // 设定基准值（pivot）
        int pivot = left;
        int index = pivot + 1;
        for (int i = index; i <= right; i++) {
            if (arr[i] < arr[pivot]) {
                swap(arr, i, index);
                index++;
            }
        }
        swap(arr, pivot, index - 1);
        return index - 1;
    }
    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```

### 8. PHP 代码实现[](#8-php-dai-ma-shi-xian)

```php
function quickSort($arr)
{
    if (count($arr) <= 1)
        return $arr;
    $middle = $arr[0];
    $leftArray = array();
    $rightArray = array();
    for ($i = 1; $i < count($arr); $i++) {
        if ($arr[$i] > $middle)
            $rightArray[] = $arr[$i];
        else
            $leftArray[] = $arr[$i];
    }
    $leftArray = quickSort($leftArray);
    $leftArray[] = $middle;
    $rightArray = quickSort($rightArray);
    return array_merge($leftArray, $rightArray);
}
```

### <span id="堆排序">堆排序</span>
---

堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：

1. 大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列；
2. 小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列；

堆排序的平均时间复杂度为 Ο(nlogn)。

### **1. 算法步骤**[](https://sort.hust.cc/7.heapsort#1-suan-fa-bu-zhou)

1. 将待排序序列构建成一个堆 H\[0……n-1\]，根据（升序降序需求）选择大顶堆或小顶堆；
2. 把堆首（最大值）和堆尾互换；
3. 把堆的尺寸缩小 1，并调用 shift\_down(0)，目的是把新的数组顶端数据调整到相应位置；
4. 重复步骤 2，直到堆的尺寸为 1。

### **2. 动图演示**

![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/assets_-Lm9JtwbhXVOfXyecToy_-Lm9KQIJAMvCgJQzErQS_-Lm9KRR1vlUE00Usu8qB_heapSort.gif)

### 3. JavaScript 代码实现[](#3-javascript-dai-ma-shi-xian)

```js
var len;    // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量
function buildMaxHeap(arr) {   // 建立大顶堆
    len = arr.length;
    for (var i = Math.floor(len/2); i >= 0; i--) {
        heapify(arr, i);
    }
}
function heapify(arr, i) {     // 堆调整
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function heapSort(arr) {
    buildMaxHeap(arr);
    for (var i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}
```

### 4. Python 代码实现[](#4-python-dai-ma-shi-xian)

```js
def buildMaxHeap(arr):
    import math
    for i in range(math.floor(len(arr)/2),-1,-1):
        heapify(arr,i)
def heapify(arr, i):
    left = 2*i+1
    right = 2*i+2
    largest = i
    if left < arrLen and arr[left] > arr[largest]:
        largest = left
    if right < arrLen and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        swap(arr, i, largest)
        heapify(arr, largest)
def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]
def heapSort(arr):
    global arrLen
    arrLen = len(arr)
    buildMaxHeap(arr)
    for i in range(len(arr)-1,0,-1):
        swap(arr,0,i)
        arrLen -=1
        heapify(arr, 0)
    return arr
```

### 5. Go 代码实现[](#5-go-dai-ma-shi-xian)

```js
func heapSort(arr []int) []int {
    arrLen := len(arr)
    buildMaxHeap(arr, arrLen)
    for i := arrLen - 1; i >= 0; i-- {
        swap(arr, 0, i)
        arrLen -= 1
        heapify(arr, 0, arrLen)
    }
    return arr
}
func buildMaxHeap(arr []int, arrLen int) {
    for i := arrLen / 2; i >= 0; i-- {
        heapify(arr, i, arrLen)
    }
}
func heapify(arr []int, i, arrLen int) {
    left := 2*i + 1
    right := 2*i + 2
    largest := i
    if left < arrLen && arr[left] > arr[largest] {
        largest = left
    }
    if right < arrLen && arr[right] > arr[largest] {
        largest = right
    }
    if largest != i {
        swap(arr, i, largest)
        heapify(arr, largest, arrLen)
    }
}
func swap(arr []int, i, j int) {
    arr[i], arr[j] = arr[j], arr[i]
}
```

### 6. Java 代码实现[](#6-java-dai-ma-shi-xian)

```js
public class HeapSort implements IArraySort {
    @Override
    public int[] sort(int[] sourceArray) throws Exception {
        // 对 arr 进行拷贝，不改变参数内容
        int[] arr = Arrays.copyOf(sourceArray, sourceArray.length);
        int len = arr.length;
        buildMaxHeap(arr, len);
        for (int i = len - 1; i > 0; i--) {
            swap(arr, 0, i);
            len--;
            heapify(arr, 0, len);
        }
        return arr;
    }
    private void buildMaxHeap(int[] arr, int len) {
        for (int i = (int) Math.floor(len / 2); i >= 0; i--) {
            heapify(arr, i, len);
        }
    }
    private void heapify(int[] arr, int i, int len) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        int largest = i;
        if (left < len && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < len && arr[right] > arr[largest]) {
            largest = right;
        }
        if (largest != i) {
            swap(arr, i, largest);
            heapify(arr, largest, len);
        }
    }
    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```

### 7. PHP 代码实现[](#7-php-dai-ma-shi-xian)

```js
function buildMaxHeap(&$arr)
{
    global $len;
    for ($i = floor($len/2); $i >= 0; $i--) {
        heapify($arr, $i);
    }
}
function heapify(&$arr, $i)
{
    global $len;
    $left = 2 * $i + 1;
    $right = 2 * $i + 2;
    $largest = $i;
    if ($left < $len && $arr[$left] > $arr[$largest]) {
        $largest = $left;
    }
    if ($right < $len && $arr[$right] > $arr[$largest]) {
        $largest = $right;
    }
    if ($largest != $i) {
        swap($arr, $i, $largest);
        heapify($arr, $largest);
    }
}
function swap(&$arr, $i, $j)
{
    $temp = $arr[$i];
    $arr[$i] = $arr[$j];
    $arr[$j] = $temp;
}
function heapSort($arr) {
    global $len;
    $len = count($arr);
    buildMaxHeap($arr);
    for ($i = count($arr) - 1; $i > 0; $i--) {
        swap($arr, 0, $i);
        $len--;
        heapify($arr, 0);
    }
    return $arr;
}
```

### <span id="计数排序">计数排序</span>
----

计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

### **1. 动图演示**[](https://sort.hust.cc/8.countingsort#1-dong-tu-yan-shi)

![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/assets_-Lm9JtwbhXVOfXyecToy_-Lm9KQIJAMvCgJQzErQS_-Lm9KR6H7q7zAmoZ2MSj_countingSort.gif)

### **2. JavaScript 代码实现**[](https://sort.hust.cc/8.countingsort#2-javascript-dai-ma-shi-xian)

```js
function countingSort(arr, maxValue) {
    var bucket = new Array(maxValue+1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;
    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
    for (var j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }
    return arr;
}
```

### **3. Python 代码实现**[](https://sort.hust.cc/8.countingsort#3-python-dai-ma-shi-xian)

```js
def countingSort(arr, maxValue):
    bucketLen = maxValue+1
    bucket = [0]*bucketLen
    sortedIndex =0
    arrLen = len(arr)
    for i in range(arrLen):
        if not bucket[arr[i]]:
            bucket[arr[i]]=0
        bucket[arr[i]]+=1
    for j in range(bucketLen):
        while bucket[j]>0:
            arr[sortedIndex] = j
            sortedIndex+=1
            bucket[j]-=1
    return arr
```

### **4. Go 代码实现**[](https://sort.hust.cc/8.countingsort#4-go-dai-ma-shi-xian)

```js
func countingSort(arr []int, maxValue int) []int {
    bucketLen := maxValue + 1
    bucket := make([]int, bucketLen) // 初始为0的数组
    sortedIndex := 0
    length := len(arr)
    for i := 0; i < length; i++ {
        bucket[arr[i]] += 1
    }
    for j := 0; j < bucketLen; j++ {
        for bucket[j] > 0 {
            arr[sortedIndex] = j
            sortedIndex += 1
            bucket[j] -= 1
        }
    }
    return arr
}
```

### **5. Java 代码实现**[](https://sort.hust.cc/8.countingsort#5-java-dai-ma-shi-xian)

```js
public class CountingSort implements IArraySort {
    @Override
    public int[] sort(int[] sourceArray) throws Exception {
        // 对 arr 进行拷贝，不改变参数内容
        int[] arr = Arrays.copyOf(sourceArray, sourceArray.length);
        int maxValue = getMaxValue(arr);
        return countingSort(arr, maxValue);
    }
    private int[] countingSort(int[] arr, int maxValue) {
        int bucketLen = maxValue + 1;
        int[] bucket = new int[bucketLen];
        for (int value : arr) {
            bucket[value]++;
        }
        int sortedIndex = 0;
        for (int j = 0; j < bucketLen; j++) {
            while (bucket[j] > 0) {
                arr[sortedIndex++] = j;
                bucket[j]--;
            }
        }
        return arr;
    }
    private int getMaxValue(int[] arr) {
        int maxValue = arr[0];
        for (int value : arr) {
            if (maxValue < value) {
                maxValue = value;
            }
        }
        return maxValue;
    }
}
```

**6. PHP 代码实现**[](https://sort.hust.cc/8.countingsort#6-php-dai-ma-shi-xian)
============================================================================

```js
function countingSort($arr, $maxValue = null)
{
    if ($maxValue === null) {
        $maxValue = max($arr);
    }
    for ($m = 0; $m < $maxValue + 1; $m++) {
        $bucket[] = null;
    }
    $arrLen = count($arr);
    for ($i = 0; $i < $arrLen; $i++) {
        if (!array_key_exists($arr[$i], $bucket)) {
            $bucket[$arr[$i]] = 0;
        }
        $bucket[$arr[$i]]++;
    }
    $sortedIndex = 0;
    foreach ($bucket as $key => $len) {
        if($len !== null){
            for($j = 0; $j < $len; $j++){
                $arr[$sortedIndex++] = $key;
            }
        }
    }
    return $arr;
}
```

### <span id="桶排序">桶排序</span>
---

桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。为了使桶排序更加高效，我们需要做到这两点：

1. 在额外空间充足的情况下，尽量增大桶的数量
2. 使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中

同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。

![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/demo_js_algorithmSort_bucketSort_1_Converted.jpg)

### **1. 什么时候最快**[](https://sort.hust.cc/9.bucketsort#1-shen-me-shi-hou-zui-kuai)

当输入的数据可以均匀的分配到每一个桶中。

### **2. 什么时候最慢**[](https://sort.hust.cc/9.bucketsort#2-shen-me-shi-hou-zui-man)

当输入的数据被分配到了同一个桶中。

### **3. JavaScript 代码实现**[](https://sort.hust.cc/9.bucketsort#3-javascript-dai-ma-shi-xian)

```js
function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
      return arr;
    }
    var i;
    var minValue = arr[0];
    var maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
          minValue = arr[i];                // 输入数据的最小值
      } else if (arr[i] > maxValue) {
          maxValue = arr[i];                // 输入数据的最大值
      }
    }
    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }
    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }
    return arr;
}
```

### **4. Java 代码实现**[](https://sort.hust.cc/9.bucketsort#4-java-dai-ma-shi-xian)

```js
public class BucketSort implements IArraySort {
    private static final InsertSort insertSort = new InsertSort();
    @Override
    public int[] sort(int[] sourceArray) throws Exception {
        // 对 arr 进行拷贝，不改变参数内容
        int[] arr = Arrays.copyOf(sourceArray, sourceArray.length);
        return bucketSort(arr, 5);
    }
    private int[] bucketSort(int[] arr, int bucketSize) throws Exception {
        if (arr.length == 0) {
            return arr;
        }
        int minValue = arr[0];
        int maxValue = arr[0];
        for (int value : arr) {
            if (value < minValue) {
                minValue = value;
            } else if (value > maxValue) {
                maxValue = value;
            }
        }
        int bucketCount = (int) Math.floor((maxValue - minValue) / bucketSize) + 1;
        int[][] buckets = new int[bucketCount][0];
        // 利用映射函数将数据分配到各个桶中
        for (int i = 0; i < arr.length; i++) {
            int index = (int) Math.floor((arr[i] - minValue) / bucketSize);
            buckets[index] = arrAppend(buckets[index], arr[i]);
        }
        int arrIndex = 0;
        for (int[] bucket : buckets) {
            if (bucket.length <= 0) {
                continue;
            }
            // 对每个桶进行排序，这里使用了插入排序
            bucket = insertSort.sort(bucket);
            for (int value : bucket) {
                arr[arrIndex++] = value;
            }
        }
        return arr;
    }
    /**
     * 自动扩容，并保存数据
     *
     * @param arr
     * @param value
     */
    private int[] arrAppend(int[] arr, int value) {
        arr = Arrays.copyOf(arr, arr.length + 1);
        arr[arr.length - 1] = value;
        return arr;
    }
}
```

### **5. PHP 代码实现**[](https://sort.hust.cc/9.bucketsort#5-php-dai-ma-shi-xian)

```js
function bucketSort($arr, $bucketSize = 5)
{
    if (count($arr) === 0) {
      return $arr;
    }
    $minValue = $arr[0];
    $maxValue = $arr[0];
    for ($i = 1; $i < count($arr); $i++) {
      if ($arr[$i] < $minValue) {
          $minValue = $arr[$i];
      } else if ($arr[$i] > $maxValue) {
          $maxValue = $arr[$i];
      }
    }
    $bucketCount = floor(($maxValue - $minValue) / $bucketSize) + 1;
    $buckets = array();
    for ($i = 0; $i < count($buckets); $i++) {
        $buckets[$i] = [];
    }
    for ($i = 0; $i < count($arr); $i++) {
        $buckets[floor(($arr[$i] - $minValue) / $bucketSize)][] = $arr[$i];
    }
    $arr = array();
    for ($i = 0; $i < count($buckets); $i++) {
        $bucketTmp = $buckets[$i];
        sort($bucketTmp);
        for ($j = 0; $j < count($bucketTmp); $j++) {
            $arr[] = $bucketTmp[$j];
        }
    }
    return $arr;
}
```

### <span id="基数排序">基数排序</span>
----

基数排序是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。

### **1. 基数排序 vs 计数排序 vs 桶排序**[](https://sort.hust.cc/10.radixsort#1-ji-shu-pai-xu-vs-ji-shu-pai-xu-vs-tong-pai-xu)

基数排序有两种方法.  
这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异案例看大家发的：

- 基数排序：根据键值的每位数字来分配桶；
- 计数排序：每个桶只存储单一键值；
- 桶排序：每个桶存储一定范围的数值；

### **2. LSD 基数排序动图演示**[](https://sort.hust.cc/10.radixsort#2-lsd-ji-shu-pai-xu-dong-tu-yan-shi)

![](https://blog.imaxyoung.com/wp-content/uploads/2019/09/assets_-Lm9JtwbhXVOfXyecToy_-Lm9KQIJAMvCgJQzErQS_-Lm9KR9HMl708IHhEYGK_radixSort.gif)### 

**3. JavaScript 代码实现**[](https://sort.hust.cc/10.radixsort#3-javascript-dai-ma-shi-xian)

```js
//LSD Radix Sort
var counter = [];
function radixSort(arr, maxDigit) {
    var mod = 10;
    var dev = 1;
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    return arr;
}
```

### **4. python 代码实现**[](https://sort.hust.cc/10.radixsort#4-python-dai-ma-shi-xian)

```js
def radix(arr):
    digit = 0
    max_digit = 1
    max_value = max(arr)
    #找出列表中最大的位数
    while 10**max_digit < max_value:
        max_digit = max_digit + 1
    while digit < max_digit:
        temp = [[] for i in range(10)]
        for i in arr:
            #求出每一个元素的个、十、百位的值
            t = int((i/10**digit)%10)
            temp[t].append(i)
        coll = []
        for bucket in temp:
            for i in bucket:
                coll.append(i)
        arr = coll
        digit = digit + 1
    return arr
```

### **5. Java 代码实现**[](https://sort.hust.cc/10.radixsort#5-java-dai-ma-shi-xian)

```js
/**
 * 基数排序
 * 考虑负数的情况还可以参考： https://code.i-harness.com/zh-CN/q/e98fa9
 */
public class RadixSort implements IArraySort {
    @Override
    public int[] sort(int[] sourceArray) throws Exception {
        // 对 arr 进行拷贝，不改变参数内容
        int[] arr = Arrays.copyOf(sourceArray, sourceArray.length);
        int maxDigit = getMaxDigit(arr);
        return radixSort(arr, maxDigit);
    }
    /**
     * 获取最高位数
     */
    private int getMaxDigit(int[] arr) {
        int maxValue = getMaxValue(arr);
        return getNumLenght(maxValue);
    }
    private int getMaxValue(int[] arr) {
        int maxValue = arr[0];
        for (int value : arr) {
            if (maxValue < value) {
                maxValue = value;
            }
        }
        return maxValue;
    }
    protected int getNumLenght(long num) {
        if (num == 0) {
            return 1;
        }
        int lenght = 0;
        for (long temp = num; temp != 0; temp /= 10) {
            lenght++;
        }
        return lenght;
    }
    private int[] radixSort(int[] arr, int maxDigit) {
        int mod = 10;
        int dev = 1;
        for (int i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
            // 考虑负数的情况，这里扩展一倍队列数，其中 [0-9]对应负数，[10-19]对应正数 (bucket + 10)
            int[][] counter = new int[mod * 2][0];
            for (int j = 0; j < arr.length; j++) {
                int bucket = ((arr[j] % mod) / dev) + mod;
                counter[bucket] = arrayAppend(counter[bucket], arr[j]);
            }
            int pos = 0;
            for (int[] bucket : counter) {
                for (int value : bucket) {
                    arr[pos++] = value;
                }
            }
        }
        return arr;
    }
    /**
     * 自动扩容，并保存数据
     *
     * @param arr
     * @param value
     */
    private int[] arrayAppend(int[] arr, int value) {
        arr = Arrays.copyOf(arr, arr.length + 1);
        arr[arr.length - 1] = value;
        return arr;
    }
}
```

### **6. PHP 代码实现**[](https://sort.hust.cc/10.radixsort#6-php-dai-ma-shi-xian)

```js
function radixSort($arr, $maxDigit = null)
{
    if ($maxDigit === null) {
        $maxDigit = max($arr);
    }
    $counter = [];
    for ($i = 0; $i < $maxDigit; $i++) {
        for ($j = 0; $j < count($arr); $j++) {
            preg_match_all('/\d/', (string) $arr[$j], $matches);
            $numArr = $matches[0];
            $lenTmp = count($numArr);
            $bucket = array_key_exists($lenTmp - $i - 1, $numArr)
                ? intval($numArr[$lenTmp - $i - 1])
                : 0;
            if (!array_key_exists($bucket, $counter)) {
                $counter[$bucket] = [];
            }
            $counter[$bucket][] = $arr[$j];
        }
        $pos = 0;
        for ($j = 0; $j < count($counter); $j++) {
            $value = null;
            if ($counter[$j] !== null) {
                while (($value = array_shift($counter[$j])) !== null) {
                    $arr[$pos++] = $value;
                }
          }
        }
    }
    return $arr;
}
```
