<?php
/**
 * CurrentStatusTest
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
use OpenAPI\Client\Model\fulfillment\outbound\v2020_07_01\CurrentStatus;

/**
 * CurrentStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The current delivery status of the package.
 * @package     OpenAPI\Client
 */
class CurrentStatusTest extends TestCase
{

    private CurrentStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CurrentStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CurrentStatus"
     */
    public function testCurrentStatus()
    {
        $this->assertInstanceOf(CurrentStatus::class, $this->model);
    }
}
