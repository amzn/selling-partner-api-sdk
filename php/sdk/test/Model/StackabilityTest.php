<?php
/**
 * StackabilityTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\Stackability;

/**
 * StackabilityTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates whether pallets will be stacked when carrier arrives for pick-up.
 * @package     SpApi
 */
class StackabilityTest extends TestCase
{

    private Stackability $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Stackability();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Stackability"
     */
    public function testStackability()
    {
        $this->assertInstanceOf(Stackability::class, $this->model);
    }
}
