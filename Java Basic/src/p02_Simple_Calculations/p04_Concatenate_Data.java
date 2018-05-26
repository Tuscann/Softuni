package p02_Simple_Calculations;

import java.util.Scanner;  // 100/100

public class p04_Concatenate_Data {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String firstName = input.nextLine();
        String lastName = input.nextLine();
        int age = Integer.parseInt(input.nextLine());
        String town = input.nextLine();

        System.out.printf("You are %s %s, a %d-years old person from %s.",firstName,lastName,age,town);
    }
}