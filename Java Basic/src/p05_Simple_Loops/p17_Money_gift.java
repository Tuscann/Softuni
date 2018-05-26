package p05_Simple_Loops;

import java.util.Scanner;

public class p17_Money_gift {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int number = Integer.parseInt(console.nextLine());
        Double price = Double.parseDouble(console.nextLine());

        Double sum = 0.0;

        for (int i = 1; i <= number; i++) {
            int currentNumber = Integer.parseInt(console.nextLine());

            if (i % 2 == 0) {
                currentNumber *= 2;
            }
            sum += currentNumber;
        }
        System.out.printf("The project prize was %.2f lv.", sum * price);
    }
}
