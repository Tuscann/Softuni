package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p19_Sleepy_Tom_Cat {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Integer holidays = Integer.parseInt(scanner.nextLine());

        Integer totalPlayMinutes = holidays * 127 + (365 - holidays) * 63;

        Double difference = Math.abs(totalPlayMinutes - 30000.0);
        Double hours = difference / 60;
        Double minutes = difference % 60;

        if (totalPlayMinutes > 30000) {
            System.out.println("Tom will run away");
            System.out.printf("%.0f hours and %.0f minutes more for play",  Math.floor(hours), Math.floor(minutes));
        } else {
            System.out.println("Tom sleeps well");
            System.out.printf("%.0f hours and %.0f minutes less for play",  Math.floor(hours), Math.floor(minutes));
        }
    }
}
