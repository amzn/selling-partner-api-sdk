<?php
/**
 * FileFormatTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\invoices\v2024_06_19\FileFormat;

/**
 * FileFormatTest Class Doc Comment
 *
 * @category    Class
 * @description Supported invoice file extensions.
 * @package     SpApi
 */
class FileFormatTest extends TestCase
{

    private FileFormat $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FileFormat();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FileFormat"
     */
    public function testFileFormat()
    {
        $this->assertInstanceOf(FileFormat::class, $this->model);
    }
}
