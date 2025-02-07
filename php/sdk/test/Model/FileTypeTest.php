<?php
/**
 * FileTypeTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\merchantFulfillment\v0\FileType;

/**
 * FileTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The file type for a label.
 * @package     OpenAPI\Client
 */
class FileTypeTest extends TestCase
{

    private FileType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FileType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FileType"
     */
    public function testFileType()
    {
        $this->assertInstanceOf(FileType::class, $this->model);
    }
}
