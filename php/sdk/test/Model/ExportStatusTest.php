<?php
/**
 * ExportStatusTest
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
use OpenAPI\Client\Model\invoices\v2024_06_19\ExportStatus;

/**
 * ExportStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The current status of the request.
 * @package     OpenAPI\Client
 */
class ExportStatusTest extends TestCase
{

    private ExportStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ExportStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ExportStatus"
     */
    public function testExportStatus()
    {
        $this->assertInstanceOf(ExportStatus::class, $this->model);
    }
}
