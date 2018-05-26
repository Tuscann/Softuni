package p05_Simple_Loops;

import java.util.Scanner;

public class p07_Left_and_Right_Sum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        int leftSum = 0;
        int rightSum = 0;

        for (int i = 1; i <= n; i++) {
            leftSum = leftSum + scanner.nextInt();
        }
        for (int i = 1; i <= n; i++) {
            rightSum = rightSum + scanner.nextInt();
        }

        if (leftSum == rightSum) {
            System.out.println("Yes, sum = " + leftSum);
        } else {
            int difference = Math.abs(leftSum - rightSum);
            System.out.println("No, diff = " + difference);
        }
    }
}
