package p05_Simple_Loops;

import java.util.Scanner;

public class p14_Divide_with_to_Return {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        Double p2 = 0.0;
        Double p3 = 0.0;
        Double p4 = 0.0;

        for (int i = 0; i < n; i++) {

            int current = scanner.nextInt();

            if (current % 2 == 0) {
                p2++;
            }
            if (current % 3 == 0) {
                p3++;
            }
            if (current % 4 == 0) {
                p4++;
            }
        }
        System.out.printf("%.2f%%\n", p2 / n * 100);
        System.out.printf("%.2f%%\n", p3 / n * 100);
        System.out.printf("%.2f%%\n", p4 / n * 100);
    }
}
