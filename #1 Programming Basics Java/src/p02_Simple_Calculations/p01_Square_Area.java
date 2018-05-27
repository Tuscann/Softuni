package p02_Simple_Calculations;

import java.util.Scanner;

public class p01_Square_Area {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        var a = input.nextInt();
        Integer area = a * a;

        System.out.println("Square = " + area);
    }
}
