package p03_Simple_Conditional_Statements;

import java.io.Console;
import java.util.Scanner;

public class p20_swimming {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Double seconds = Double.parseDouble(sc.nextLine());
        Double distance_meters = Double.parseDouble(sc.nextLine());
        Double time_seconds = Double.parseDouble(sc.nextLine());

        Double total = distance_meters * time_seconds + Math.floor(distance_meters / 15) * (double) 12.5;

        if (seconds <= total) {
            System.out.printf("No, he failed! He was %.2f seconds slower.", total - seconds);
        } else {
            System.out.printf("Yes, he succeeded! The new world record is %.2f seconds.", total);
        }
    }
}
