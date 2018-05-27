package p07_Advanced_Loops;

import java.util.Scanner;

public class p10_Check_Prime2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Double n = Double.parseDouble(scanner.nextLine());
        int counter = (int) Math.sqrt(n);
        boolean prime = true;

        if (n > 1) {

            for (int i = 2; i <= counter; i++) {
                if (n % i == 0) {
                    prime = false;
                    break;
                }
            }
        } else {
            prime = false;
        }

        if (prime) {
            System.out.println("Prime");
        }  else {
            System.out.println("Not prime");
        }
    }
}
