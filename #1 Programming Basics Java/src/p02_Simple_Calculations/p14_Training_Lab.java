package p02_Simple_Calculations;

import java.util.Scanner;

public class p14_Training_Lab {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Double lenght = Double.parseDouble(input.nextLine()) * 10;
        Double with = Double.parseDouble(input.nextLine()) * 10;

        Integer rows = (int) (lenght / 12);
        Integer cols = (int) ((with - 10) / 7);
        Integer sum = (rows * cols) - 3;

        System.out.println(rows);
        System.out.println(cols);
        System.out.println(sum);
    }
}
