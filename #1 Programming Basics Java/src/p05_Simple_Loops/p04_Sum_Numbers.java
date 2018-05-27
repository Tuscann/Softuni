package p05_Simple_Loops;

import java.util.Scanner;

public class p04_Sum_Numbers {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer n = input.nextInt();

        Long sum = 0L;
        for (int i = 0; i < n; i++) {
            Integer currentNumber = input.nextInt();
            sum += currentNumber;
        }
        System.out.println(sum);
    }
}
