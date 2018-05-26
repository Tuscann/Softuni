package p02_Simple_Calculations;

import java.util.Scanner;

public class p17_2_Dance_Hall {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Double L = Double.parseDouble(scanner.nextLine());
        Double W = Double.parseDouble(scanner.nextLine());
        Double A = Double.parseDouble(scanner.nextLine());

        Double sum = L * 100 * W * 100;
        Double garderob = A * 100 * A * 100;
        Double skameika = sum / 10;

        Double summm = Math.floor((sum - garderob - skameika) / (40 + 7000));

        System.out.printf("%.0f",summm);
    }
}
