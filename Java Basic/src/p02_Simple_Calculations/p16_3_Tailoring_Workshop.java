package p02_Simple_Calculations;

import java.util.Scanner;

public class p16_3_Tailoring_Workshop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int tableCount = Integer.parseInt(scanner.nextLine());
        Double tableLength = Double.parseDouble(scanner.nextLine());
        double tableWeight = Double.parseDouble(scanner.nextLine());

        double prizeDolars = tableCount * (tableLength + 2 * 0.3) * (tableWeight + 2 * 0.3) * 7;
        double prizeDolars1 = tableCount * (tableLength / 2) * (tableLength / 2) * 9;
        double prizeTotal = prizeDolars1 + prizeDolars;

        System.out.printf("%.2f USD\n",prizeTotal);
        System.out.printf("%.2f BGN",prizeTotal * 1.85);
    }
}
