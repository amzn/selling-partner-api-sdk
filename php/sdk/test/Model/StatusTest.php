<?php
/**
 * StatusTest
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
use OpenAPI\Client\Model\shipping\Status;

/**
 * StatusTest Class Doc Comment
 *
 * @category    Class
 * @description The status of the package being shipped.
 * @package     OpenAPI\Client
 */
class StatusTest extends TestCase
{

    private Status $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Status();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Status"
     */
    public function testStatus()
    {
        $this->assertInstanceOf(Status::class, $this->model);
    }
}
