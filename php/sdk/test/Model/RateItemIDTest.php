<?php
/**
 * RateItemIDTest
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
use SpApi\Model\shipping\v2\RateItemID;

/**
 * RateItemIDTest Class Doc Comment
 *
 * @category    Class
 * @description Unique ID for the rateItem.
 * @package     SpApi
 */
class RateItemIDTest extends TestCase
{

    private RateItemID $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RateItemID();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RateItemID"
     */
    public function testRateItemID()
    {
        $this->assertInstanceOf(RateItemID::class, $this->model);
    }
}
