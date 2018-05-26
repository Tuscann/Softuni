package p05_Simple_Loops;

import java.util.Scanner;

public class p16_Energy_Loss {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int n = Integer.parseInt(console.nextLine());
        int a = Integer.parseInt(console.nextLine());

        double sum = 100 * a * n;

        for (int i = 1; i <= n; i++) {
            int current = Integer.parseInt(console.nextLine());

            if (current % 2 == 0 && i % 2 == 0) {
                sum -= 68 * a;
            } else if (current % 2 != 0 && i % 2 == 0) {
                sum -= 65 * a;
            } else if (current % 2 != 0 && i % 2 != 0) {
                sum -= 30 * a;
            } else if (current % 2 == 0 && i % 2 != 0) {
                sum -= 49 * a;
            }
        }
        double exhaust = sum / a / n;

        if (exhaust > 50) {
            System.out.printf("They feel good! Energy left: %.2f", exhaust);
        } else {
            System.out.printf("They are wasted! Energy left: %.2f", exhaust);
        }
    }
}
