<?php
/**
 * PrepGuidanceTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\PrepGuidance;

/**
 * PrepGuidanceTest Class Doc Comment
 *
 * @category    Class
 * @description Item preparation instructions.
 * @package     OpenAPI\Client
 */
class PrepGuidanceTest extends TestCase
{

    private PrepGuidance $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrepGuidance();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrepGuidance"
     */
    public function testPrepGuidance()
    {
        $this->assertInstanceOf(PrepGuidance::class, $this->model);
    }
}
