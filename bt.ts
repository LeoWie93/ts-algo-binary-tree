import { log } from "console";

interface BinaryTree {
    head: TreeNode;
}

class BinaryTree {
    constructor(head: TreeNode) {
        this.head = head;
    }

    insert(node: TreeNode | null, value: number): TreeNode {
        if (node === null) {
            return new TreeNode(value);
        }

        if (value < node.data) {
            node.left = this.insert(node.left, value);
        } else {
            node.right = this.insert(node.right, value);
        }
        return node;
    }

    search(node: TreeNode | null, value: number): TreeNode | null {
        if (node === null) {
            return null;
        }

        if (node.data === value) {
            return node;
        }

        return value < node.data
            ? this.search(node.left, value)
            : this.search(node.right, value);
    }

    traversesInOrder(node: TreeNode | null): void {
        if (node === null) {
            return;
        }

        this.traversesInOrder(node.left);
        log(node.data);
        this.traversesInOrder(node.right);
    }


    traversesPreOrder(node: TreeNode | null): void {
        if (node === null) {
            return;
        }
        log(node.data);
        this.traversesPreOrder(node.left);
        this.traversesPreOrder(node.right);
    }


    traversesPostOrder(node: TreeNode | null): void {
        if (node === null) {
            return;
        }

        this.traversesPostOrder(node.left);
        this.traversesPostOrder(node.right);
        log(node.data);
    }
}

interface TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;
};

class TreeNode {
    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}



//*** controllable examples
// const root = new TreeNode(1);
//
// root.left = new TreeNode(2);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
//
// root.right = new TreeNode(3);
// root.right.right = new TreeNode(6);
//
// const btree = new BinaryTree(root);
// log("inorder");
// btree.traversesInOrder(btree.head);
//
// log();
// log("postorder");
// btree.traversesPostOrder(btree.head);
//
// log();
// log("preorder");
// btree.traversesPreOrder(btree.head);


// ***** searchable example
const btree = new BinaryTree(new TreeNode(50));
btree.insert(btree.head, 45);
btree.insert(btree.head, 60);
btree.insert(btree.head, 70);
btree.insert(btree.head, 57);
btree.insert(btree.head, 65);
btree.insert(btree.head, 46);
btree.insert(btree.head, 55);
btree.insert(btree.head, 44);
btree.insert(btree.head, 56);


log("search");
const node = btree.search(btree.head, 57);
log(node);
