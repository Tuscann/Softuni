package p07_Advanced_Loops;

import java.util.Scanner;

public class p06_Number_in_Range {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Еnter a number in the range [1...100]:");
        Integer n = Integer.parseInt(input.nextLine());

        while (true) {
            if (n >= 1 && n <= 100) {
                System.out.printf("The number is: %s", n);
                break;
            } else {
                System.out.print("Invalid number!\n");
            }
            System.out.print("Еnter a number in the range [1...100]:");
            n = Integer.parseInt(input.nextLine());
        }
    }
}
