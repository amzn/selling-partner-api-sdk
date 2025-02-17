<?php
/**
 * PrepGuidanceTest
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
use SpApi\Model\fulfillment\inbound\v0\PrepGuidance;

/**
 * PrepGuidanceTest Class Doc Comment
 *
 * @category    Class
 * @description Item preparation instructions.
 * @package     SpApi
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
