// 问题1 创建一个无原型的对象
var dict = Object.create(null, {
    man: { value: "not woman" }
});

function getValue(word) {
    return dict[word];
}

console.log(getValue("man")); // output: "not woman"

console.log(getValue("constructor")); // output: undefined


// 问题2 实现一个带权重的随机算法，输入 n 个数字以及它们对应的权重，输出其中 m 个。注意：要求时间复杂度为 O(m)，空间复杂度也为 O(m)
    public void printM(int[][] nums) { // n * 2 [1,1] [2,2] [3,3]
        int n = nums.length;
        int sumWeights = 0;
        for (int i = 0; i < n; i++) {
            sumWeights += nums[i][1];
        }
        Random rand = new Random();
        for (int i = 0; i < m; i++) {
            int randNum = rand.nextInt(sumWeights);
            int sum = 0;
            for (int j = 0; j < n - 1; j++) {
                sum += nums[j][1];
                if (sum <= randNum && randNum < sum + nums[j + 1][1]) {
                    System.out.println(nums[j][0]);
                }
            }
        }
    }


// 问题3 设计一个 JSON 序列化算法，支持 Date, Buffer 等类型属性
var jsObject = new Object();
jsObject.Date = "2018/3/7";
jsObject.Buffer = "123";
var jsonString = JSON.stringify(jsObject);
console.log(jsonString);
