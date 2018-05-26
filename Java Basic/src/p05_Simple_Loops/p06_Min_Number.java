package p05_Simple_Loops;

import java.util.Scanner;

public class p06_Min_Number {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer n = input.nextInt();

        Integer min = Integer.MAX_VALUE;
        for (int i = 0; i < n; i++) {
            Integer currentNumber = input.nextInt();
            if (currentNumber < min) {
                min = currentNumber;
            }
        }
        System.out.println(min);
    }
}
