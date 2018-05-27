package p02_Simple_Calculations;

import java.util.Scanner;

public class p16_Repair_Tiles2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());       // Ground length
        double w = Double.parseDouble(scanner.nextLine());  // Tile width
        double h = Double.parseDouble(scanner.nextLine());  // Tile length
        int a = Integer.parseInt(scanner.nextLine());       // Bench width
        int b = Integer.parseInt(scanner.nextLine());       // Bench length

        int area = n * n;
        int bench = a * b;
        int areaToRepair = area - bench;

        double tiles = areaToRepair / (w * h);

        double time = tiles * 0.2;

        System.out.printf("%.2f",tiles);
        System.out.println();
        System.out.printf("%.2f",time);
    }
}
