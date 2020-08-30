学习笔记

# 递归模板

```
public void recur (int level, int param) {
    // terminator
    if (level > MAX_LEVEL) {
        // process result
        return;
    }
    
    // process current logic
    process(level, param);
    
    // drill down
    recur(level: level + 1, newParam);
    
    // restore current status
}
```

#### 对于分治/回溯的理解还需要通过多加练习来巩固；