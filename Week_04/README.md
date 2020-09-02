学习笔记

# 深度优先 DFS
depth first search

```
visited = set()
def dfs(node):
  # terminator
  if node in visited:
    # already visited
    return
  visited.add(node)

  # process current node
  dfs(node.left)
  dfs(node.right)

```

# 广度优先 BFS
breadth first search


# 贪心算法

# 二分查找
