<?php
/**
 * EligibilityStatusTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\replenishment\EligibilityStatus;

/**
 * EligibilityStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The current eligibility status of an offer.
 * @package     OpenAPI\Client
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
