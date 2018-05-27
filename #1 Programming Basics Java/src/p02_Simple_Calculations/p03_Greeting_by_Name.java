package p02_Simple_Calculations;

import java.util.Scanner; // 100/100

public class p03_Greeting_by_Name {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        String name = input.nextLine();
        System.out.printf("Hello, %s!", name);
    }
}