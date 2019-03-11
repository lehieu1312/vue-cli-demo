// Mảng lưu danh sách các column (field) của BO cần order by (hay gọi là whitelist)
private static List columnSort = new ArrayList();
public static String getColumnSort(String sortField) {
    // Thực hiện 1 lần và lấy ra toàn bộ mảng column cần order và add vào whitelist
    if (columnSort.size() == 0) {
        // Danh sách BO cho phép order by
        String[] arrTableName = {"ActionLog", "BanPosition", "Category", ...};
    };
    // Lấy ra toàn bộ các column (field) BO cần order by
    for (String tableName : arrTableName) {
        try {
            Class class = Class.forName("com.demo.DEMO.database.BO." + tableName);
            Field[] fieldArr = class.getDeclaredFields();
            for (int i = 0; i< fieldArr.length; i++) {
                String fieldName = fieldArr[i].getName();
                // add các column vào 1 mảng
                columnSort.add(fieldName);
            }
        } catch (ClassNotFoundException ex) {
        }
    }
}
// Cắt ký tự "-" ở đầu field sort
String sort = sortField;
if (sortField != null && sortField.startsWith("-")) {
    sortField = sortField.substring(1);
}
// Kiểm tra field cần order by có nằm trong danh sách field cho phép sort hay không
if (sortField != null && columnSort.contains(sortField)) {
    return sort;
}
return null;