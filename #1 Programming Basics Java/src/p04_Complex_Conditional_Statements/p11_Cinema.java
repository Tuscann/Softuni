package p04_Complex_Conditional_Statements;

import java.util.Scanner;

public class p11_Cinema {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String projectionType = input.nextLine().toLowerCase();
        int rowsCount = Integer.parseInt(input.nextLine());
        int columnsCount = Integer.parseInt(input.nextLine());

        int fullCapacity = rowsCount * columnsCount;
        double income = 0;

        switch (projectionType) {
            case "premiere":
                income = fullCapacity * 12.00;
                break;
            case "normal":
                income = fullCapacity * 7.50;
                break;
            case "discount":
                income = fullCapacity * 5.00;
                break;
        }
        System.out.printf("%.2f leva", income);
    }
}
