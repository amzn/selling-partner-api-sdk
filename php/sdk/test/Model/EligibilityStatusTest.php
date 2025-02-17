<?php
/**
 * EligibilityStatusTest
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
use SpApi\Model\replenishment\v2022_11_07\EligibilityStatus;

/**
 * EligibilityStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The current eligibility status of an offer.
 * @package     SpApi
 */
class EligibilityStatusTest extends TestCase
{

    private EligibilityStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new EligibilityStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "EligibilityStatus"
     */
    public function testEligibilityStatus()
    {
        $this->assertInstanceOf(EligibilityStatus::class, $this->model);
    }
}
