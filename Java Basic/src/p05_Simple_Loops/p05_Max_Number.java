package p05_Simple_Loops;

import java.util.Scanner;

public class p05_Max_Number {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer n = input.nextInt();

        Integer max = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            Integer currentNumber = input.nextInt();
            if (currentNumber > max) {
                max = currentNumber;
            }
        }
        System.out.println(max);
    }
}
