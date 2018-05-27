package p05_Simple_Loops;

import java.util.Scanner;

public class p10_Half_Sum_Element {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Double n = Double.parseDouble(scanner.nextLine());

        Double max = 0.0;
        Double total = 0.0;

        for (double i = 0; i < n; i++) {
            double read = Double.parseDouble(scanner.nextLine());

            if (read > max) {
                max = read;
            }
            total += read;
        }

        if (total - max == max) {
            System.out.printf("Yes\nSum = %.0f", max);

        } else {
            System.out.printf("No\nDiff = %.0f", Math.abs(max - (total - max)));
        }
    }
}
