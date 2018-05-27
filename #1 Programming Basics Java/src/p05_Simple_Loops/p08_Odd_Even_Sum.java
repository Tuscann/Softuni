package p05_Simple_Loops;

import java.util.Scanner;

public class p08_Odd_Even_Sum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        int evenSum = 0;
        int oddSum = 0;

        for (int i = 0; i < n; i++) {
            int element = scanner.nextInt();
            if (i % 2 == 0) {
                evenSum += element;
            } else {
                oddSum += element;
            }
        }

        if (evenSum == oddSum) {
            System.out.println("Yes, sum = " + evenSum);
        } else {
            int difference = Math.abs(evenSum - oddSum);
            System.out.println("No, diff = " + difference);
        }
    }
}
