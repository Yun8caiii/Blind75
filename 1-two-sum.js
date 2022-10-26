class Solution {
    public:
        vector<int> twoSum(vector<int>& nums, int target) {
            vector<int> ans;
            unordered_map<int, int> mymap;
            
            for (int i = 0; i < nums.size(); i++) {
                int v = target - nums[i];
                if (mymap.count(v) > 0) {
                    ans.push_back(mymap[v]);
                    ans.push_back(i);
                    break;
                }
                mymap[nums[i]] = i;
            }
            
            return ans;
        }
    };

