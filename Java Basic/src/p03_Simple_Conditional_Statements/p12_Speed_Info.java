package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p12_Speed_Info {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Double speed = Double.parseDouble(input.nextLine());

        if (speed <= 10) {
            System.out.print("slow");
        } else if (speed <= 50) {
            System.out.print("average");
        } else if (speed <= 150) {
            System.out.print("fast");
        } else if (speed <= 1000) {
            System.out.print("ultra fast");
        } else {
            System.out.print("extremely fast");
        }
    }
}
