<?php
/**
 * RecurringFrequencyTest
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
use SpApi\Model\sellerWallet\v2024_03_01\RecurringFrequency;

/**
 * RecurringFrequencyTest Class Doc Comment
 *
 * @category    Class
 * @description The frequency at which the transaction is repeated.
 * @package     SpApi
 */
class RecurringFrequencyTest extends TestCase
{

    private RecurringFrequency $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RecurringFrequency();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RecurringFrequency"
     */
    public function testRecurringFrequency()
    {
        $this->assertInstanceOf(RecurringFrequency::class, $this->model);
    }
}
